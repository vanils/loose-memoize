import { uglify } from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import fs from "fs-extra";
import path from "path";

const altPath = path.resolve(__dirname, "../src-alt");
const altPackage = !fs.pathExistsSync(altPath)
  ? []
  : [
      {
        input: "src-alt/memoize.js",
        output: {
          sourcemap: true,
          name: "memoize",
          format: "umd",
          file: "dist/memoize.alt.js"
        },
        plugins: [resolve()]
      }
    ]

module.exports = altPackage.concat([
  {
    input: "src/memoize.js",
    output: {
      sourcemap: true,
      name: "memoize",
      format: "umd",
      file: "dist/memoize.min.js"
    },
    plugins: [resolve(), uglify()]
  },
  {
    input: "src/memoize.js",
    output: {
      sourcemap: true,
      name: "memoize",
      format: "umd",
      file: "dist/memoize.js"
    },
    plugins: [resolve()]
  },
  {
    input: "src/memoize.js",
    output: {
      sourcemap: true,
      name: "memoize",
      format: "esm",
      file: "dist/memoize.esm.js"
    },
    plugins: [resolve()]
  }
]);
