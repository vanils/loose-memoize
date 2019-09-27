import toFixedSize from "./util/toFixedSize";
import referencer from "./referencer";

/**
 * Memoize using strict value comparison.
 *
 * @param {function} fn - Function to memoize
 * @param {Object} opt - options
 * @param {boolean} [opt.argCount] - If you want the force the number of
 *   arguments passed to memoized method.
 * @return {function} memoized function
 */
var memoizeStrict = function(fn, opt) {
  var cache = Object.create(null);
  var getKey = referencer();
  var argCount = opt && opt.argCount;
  var argCountRestricted = typeof argCount === "number";
  return function() {
    var i = argCountRestricted ? argCount : arguments.length;
    var key = "";

    while (i--) {
      key += getKey(arguments[i]) + ",";
    }

    if (typeof cache[key] === "undefined" && !(key in cache)) {
      cache[key] = argCountRestricted
        ? fn.apply(this, toFixedSize(arguments, argCount))
        : fn.apply(this, arguments);
    }

    return cache[key];
  };
};

export default memoizeStrict;
