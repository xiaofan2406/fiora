import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const env = process.env.NODE_ENV;

if (env !== 'production') {
  throw new Error(
    `Invalid NODE_ENV "${env}". Rollup build is only intended for production build.`
  );
}

const commonConfig = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
    terser(),
  ],
};

export default [
  {
    ...commonConfig,
    output: {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    ...commonConfig,
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'Fiora',
      globals: {
        react: 'React',
      },
      sourcemap: true,
    },
  },
];
