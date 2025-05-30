import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import path from "path";
import fs from "fs";
import cleaner from "rollup-plugin-cleaner";

// const getComponents = () => {
//   const componentsDir = "./src/components";
//   return fs
//     .readdirSync(componentsDir)
//     .filter((file) =>
//       fs.statSync(path.join(componentsDir, file)).isDirectory(),
//     );
// };
//
// const components = getComponents();

// обновляет exports в package.json
// const updateExports = () => {
//   const exportsMap = {
//     ".": {
//       import: "./dist/index.es.js",
//       require: "./dist/index.cjs",
//       types: "./dist/index.d.ts",
//     },
//   };
//   components.forEach((name) => {
//     exportsMap[`./components/${name}`] = {
//       import: `./dist/components/${name}.es.js`,
//       require: `./dist/components/${name}.cjs`,
//       // types: `./dist/components/${name}.d.ts`,
//       types: "./dist/index.d.ts",
//     };
//   });

//   const packageJsonPath = path.resolve(".", "package.json");
//   let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
//   packageJson.exports = exportsMap;
//   fs.writeFileSync(
//     packageJsonPath,
//     JSON.stringify(packageJson, null, 2),
//     "utf8",
//   );

//   console.log("Exports updated in package.json");
// };

// const createComponentConfig = (name) => {
//   return [
//     {
//       input: `src/components/${name}/index.ts`,
//       output: [
//         { file: `dist/components/${name}.cjs`, format: "cjs" },
//         { file: `dist/components/${name}.es.js`, format: "es" },
//       ],
//       plugins: [
//         peerDepsExternal(),
//         typescript(),
//         alias({
//           entries: [
//             {
//               find: "@components",
//               replacement: path.resolve(".", "src/components"),
//             },
//             {
//               find: "@components/",
//               replacement: path.resolve(".", "src/components/"),
//             },
//           ],
//         }),
//         resolve(),
//         commonjs(),
//         postcss({
//           extract: true,
//           minimize: true,
//           inject: false,
//         }),
//       ],
//     },
// ];
// };

// updateExports();
const addJsExtensionToImports = () => ({
  name: "add-js-extension-to-imports",
  transform(code, id) {
    if (id.includes("node_modules")) return;

    // Регулярное выражение: ищет import … from '…'
    const importRegex = /(import\s+.*?from\s+['"])([^'"]+)(['"])/g;

    const result = code.replace(importRegex, (match, before, path, after) => {
      // Условия для обработки:
      // 1. Путь содержит '/' И
      // 2. Путь НЕ начинается с './' или '../'
      const isRelative = path.startsWith("./") || path.startsWith("../");
      const hasSlash = path.includes("/");

      if (!isRelative && hasSlash) {
        // Если нет расширения — добавляем .js
        if (!/\.\w+$/.test(path)) {
          return `${before}${path}.js${after}`;
        }
      }

      // Возвращаем оригинальную строку без изменений
      return match;
    });

    return result !== code ? { code: result, map: null } : null;
  },
});

export default [
  {
    input: `src/index.ts`,
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true, // ← очень важно!
      preserveModulesRoot: "src", // корень для сохранения структуры
      // entryFileNames: "[name].js",
      // chunkFileNames: "chunks/[name]-[hash].js",
    },
    plugins: [
      cleaner({ targets: ["./dist/"] }), // удаляем старый билд
      peerDepsExternal(),
      typescript(),
      // replace({
      //   // Добавляем .js к строкам импортов
      //   delimiters: ["", ""],
      //   values: {
      //     // Используем регулярное выражение через replace
      //     // Это заменит все случаи import '...' без .js на .js
      //     // ВНИМАНИЕ: этот метод может быть грубым, см. ниже
      //     "from '": "from '",
      //     "import '": "import '",
      //     // Можно использовать более точный подход с transform хуком
      //   },
      // }),

      resolve(),
      commonjs(),
      addJsExtensionToImports(),

      postcss({
        config: {
          plugins: {
            autoprefixer: {},
            cssnano: {},
          },
        },
        extract: true,
        minimize: true,
        inject: false,
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },

  // ...components.flatMap(createComponentConfig),
];
