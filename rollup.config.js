import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV;

if (env !== 'production') {
  throw new Error(
    `Invalid NODE_ENV "${env}". Rollup build is only intended for production build.`
  );
}

const config = {
  input: 'src/index.js',
  external: ['react'],
  output: {
    format: 'umd',
    file: 'fiora.min.js',
    dir: 'dist/umd',
    name: 'Fiora',
    globals: {
      react: 'React',
    },
  },
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

export default config;
