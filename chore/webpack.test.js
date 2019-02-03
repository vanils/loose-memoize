const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const dirPath = path.resolve(__dirname, "../test");

module.exports = {
  mode: "production",
  entry: "./chore/bundle/index.js",
  output: {
    path: path.resolve(__dirname, "../dist-test"),
    filename: "res/[name].[hash].bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js", ".json"],
    modules: ["src", "node_modules"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: "head",
      scripts: fs
        .readdirSync(dirPath)
        .filter(fileName => /\.js$/.test(fileName))
        .map(fileName => `<script src="cases/${fileName}"></script>`)
        .join(""),
      filename: "index.html",
      template: path.resolve(__dirname, "./bundle/index.html")
    })
  ]
};
