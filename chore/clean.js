const fs = require("fs-extra");
const path = require("path");

fs.removeSync(path.resolve(__dirname, "../dist"));
fs.removeSync(path.resolve(__dirname, "../coverage"));
fs.removeSync(path.resolve(__dirname, "../dist-test"));
