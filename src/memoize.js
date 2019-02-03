
import memoizeLoose from './memoizeLoose';
import memoizeStrict from './memoizeStrict';

/**
 * Apply function to memoize and options. Get memoized version of original
 * function back.
 *
 * @param {function} fn - Function to memoize
 * @param {Object} opt - options
 * @param {boolean} [opt.argCount] - If you want the force the number of
 *   arguments passed to memoized method.
 * @param {boolean} [opt.strict=false] - If strict checking should be applied
 * @param {boolean} [opt.strictPropertyOrder=false] - If it should matter in
 *   which order Object properties are iterated. This option is ignored if
 *   `opt.strict` is set to `true`
 * @return {function} memoized function
 */
var memoize = function(fn, opt) {
  return (opt && opt.strict)
    ? memoizeStrict(fn, opt)
    : memoizeLoose(fn, opt);
};

export default memoize;
