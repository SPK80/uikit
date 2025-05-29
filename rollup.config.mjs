import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import path from "path";
import fs from "fs";

const getComponents = () => {
  const componentsDir = "./src/components";
  return fs
    .readdirSync(componentsDir)
    .filter((file) =>
      fs.statSync(path.join(componentsDir, file)).isDirectory()
    );
};

const components = getComponents();

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

export default [
  // === Основная библиотека: uikit ===
  {
    input: "src/index.ts",
    output: [
      // { file: "dist/index.cjs", format: "cjs" },
      // { file: "dist/index.es.js", format: "es" },
      { file: "dist/index.esm.js", format: "esm" },
    ],
    plugins: [
      peerDepsExternal(),
      typescript(),
      resolve(),
      commonjs(),
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
  {
    input: `src/components/index.ts`,
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true, // ← очень важно!
      preserveModulesRoot: "src", // корень для сохранения структуры
      entryFileNames: "[name].js",
      chunkFileNames: "chunks/[name]-[hash].js",
    },
    // output: [
    //   { file: `${outputName}.cjs`, format: 'cjs' },
    //   { file: `${outputName}.es.js`, format: 'es' },
    // ],
    plugins: [
      peerDepsExternal(),
      typescript(),
      resolve(),
      commonjs(),
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
  // ...components.flatMap(createComponentConfig),
];
