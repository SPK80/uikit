import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import path from "path";
import fs from "fs";

// import packageJson from "./package.json";


const getComponents = () => {
  const componentsDir ='./src/components'
  console.log(componentsDir)
  return fs
      .readdirSync(componentsDir)
      .filter((file) =>
          fs.statSync(path.join(componentsDir, file)).isDirectory()
      );
};


const createComponentConfig = (name) => {
  return [{
    input: `src/components/${name}/index.ts`,
        output: [
    { file: `dist/components/${name}.cjs`, format: 'cjs' },
    { file: `dist/components/${name}.es.js`, format: 'es' },
  ],
    plugins: [
    peerDepsExternal(),
    typescript(),
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      minimize: true,
      inject: false,
    }),
  ],
  },
  {
    input: `src/components/${name}/index.ts`,
        output: [{ file: `dist/components/${name}.d.ts`, format: 'es' }],
      plugins: [dts()]
  }]
}

export default [
  // === Основная библиотека: uikit ===
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.cjs', format: 'cjs' },
      { file: 'dist/index.es.js', format: 'es' },
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

  // === Компонент Button: uikit/components/Button ===
  // {
  //   input: 'src/components/Button/index.ts',
  //   output: [
  //     { file: 'dist/components/Button.cjs', format: 'cjs' },
  //     { file: 'dist/components/Button.es.js', format: 'es' },
  //   ],
  //   plugins: [
  //     typescript(),
  //     resolve(),
  //     commonjs(),
  //     postcss({
  //       extract: true,
  //       minimize: true,
  //       inject: false,
  //     }),
  //   ],
  //   external: ['react', 'react-dom'],
  // },

  // === Типы для основной библиотеки ===
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  },

  // === Типы для Button ===
  // {
  //   input: 'src/components/Button/index.ts',
  //   output: [{ file: 'dist/components/Button.d.ts', format: 'es' }],
  //   plugins: [dts()]
  // }
    ...getComponents().flatMap(createComponentConfig)
];
