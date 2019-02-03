import toFixedSize from './util/toFixedSize';
import serializer from "./serializer";


/**
 * Memoize using loose serializer.
 *
 * @param {function} fn - Function to memoize
 * @param {Object} opt - options
 * @param {boolean} [opt.argCount] - If you want the force the number of
 *   arguments passed to memoized method.
 * @param {boolean} [opt.strictPropertyOrder=false] - If it should matter in
 *   which order Object properties are iterated
 * @return {function} memoized function
 */
var memoizeLoose = function(fn, opt) {
  var strictPropertyOrder = (opt && opt.strictPropertyOrder) || false;
  var getKey = serializer(strictPropertyOrder);
  var cache = Object.create(null);
  var argCount = (opt && opt.argCount);
  var argCountRestricted = typeof argCount === 'number';
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

export default memoizeLoose;