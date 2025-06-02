import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import cleaner from "rollup-plugin-cleaner";

export default [
  {
    input: `src/index.ts`,
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true, // разбивка по модулям
      preserveModulesRoot: "src", // корень для сохранения структуры
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
