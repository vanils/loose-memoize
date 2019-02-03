import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import path from "path";
import fs from "fs";

const dirPath = path.resolve(__dirname, "../test");

module.exports = fs
  .readdirSync(dirPath)
  .filter(fileName => /\.js$/.test(fileName))
  .map((fileName, index) => ({
    input: `test/${fileName}`,
    output: `dist-test/cases/${fileName}`,
    name: `Test${index}`
  }))
  .map(file => {
    return {
      input: file.input,
      external: ["chai", "sinon"],
      output: {
        name: "tests",
        format: "umd",
        file: file.output,
        globals: {
          sinon: "sinon",
          chai: "chai"
        }
      },
      plugins: [
        resolve(),
        commonjs(),
        babel({
          babelrc: false,
          presets: ["@babel/env"],
          exclude: ["node_modules/**", "src/**"]
        })
      ]
    };
  });
