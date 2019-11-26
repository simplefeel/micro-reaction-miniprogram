import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'lib/index',
  output: {
    file: 'dist/micro-reaction-miniprogram.js',
    format: "umd",
    name: "micro-reaction-miniprogram"
  },
  plugins: [
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    uglify()
  ]
};