const memoize = require("../../../../dist/memoize.alt");

module.exports = {
  id: "loose-memoize (alt)",
  alternative: true,
  strict: false,
  memoize: fn => memoize(fn)
};
