const memoize = require("../../../../dist/memoize");

module.exports = {
  id: "loose-memoize (strict)",
  alternative: false,
  strict: true,
  memoize: fn => memoize(fn, { strict: true })
};
