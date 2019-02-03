const memoize = require("../../../../dist/memoize.alt");

module.exports = {
  id: "loose-memoize (alt-strict)",
  alternative: true,
  strict: true,
  memoize: fn => memoize(fn, { strict: true })
};
