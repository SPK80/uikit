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

const getComponents = () => {
  const componentsDir = "./src/components";
  return fs
    .readdirSync(componentsDir)
    .filter((file) =>
      fs.statSync(path.join(componentsDir, file)).isDirectory(),
    );
};

const components = getComponents();

// обновляет exports в package.json
const updateExports = () => {
  const exportsMap = {
    ".": {
      import: "./dist/index.js",
      types: "./dist/index.d.ts",
    },
  };
  components.forEach((name) => {
    exportsMap[`./components/${name}`] = {
      import: `./dist/components/${name}.js`,
      types: "./dist/index.d.ts",
    };
  });

  const packageJsonPath = path.resolve(".", "package.json");
  let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.exports = exportsMap;
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf8",
  );

  console.log("Exports updated in package.json");
};

updateExports();

const createInput = () => {
  const input = {
    index: "./src/index.ts",
  };

  components.forEach((name) => {
    input[`components/${name}`] = `./src/components/${name}/index.ts`;
  });

  return input;
};

export default [
  {
    input: createInput(),
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
      resolve({
        browser: true, // для браузерных версий пакетов
        preferBuiltins: false, // избегаем Node.js-полифилов
      }),
      commonjs(),
      // addJsExtensionToImports(),
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
      typescript(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },

  // ...components.flatMap(createComponentConfig),
];
