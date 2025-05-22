import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';

export default [
  // === Основная библиотека: uikit ===
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.cjs', format: 'cjs' },
      { file: 'dist/index.es.js', format: 'es' },
    ],
    plugins: [
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
    external: ['react', 'react-dom'],
  },

  // === Компонент Button: uikit/components/Button ===
  {
    input: 'src/components/Button/index.ts',
    output: [
      { file: 'dist/components/Button.cjs', format: 'cjs' },
      { file: 'dist/components/Button.es.js', format: 'es' },
    ],
    plugins: [
      typescript(),
      resolve(),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        inject: false,
      }),
    ],
    external: ['react', 'react-dom'],
  },

  // === Типы для основной библиотеки ===
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()]
  },

  // === Типы для Button ===
  {
    input: 'src/components/Button/index.ts',
    output: [{ file: 'dist/components/Button.d.ts', format: 'es' }],
    plugins: [dts()]
  }
];
