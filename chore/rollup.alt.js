import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

module.exports = [
  {
    input: "alt/memoize.js",
    output: {
      sourcemap: true,
      name: "memoize",
      format: "umd",
      file: "dist/alt.js"
    },
    plugins: [resolve()]
  }
];
