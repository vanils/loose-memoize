import handleValue from "./handleValue";

/**
 * Serializer factory
 *
 * @return {Function} serializer method
 */
var serializer = function(strictPropertyOrder) {
  /*
   * This object shall contain cache of references for those values with which
   * loose checking is not possible (e.g symbols, functions and so on)
   */
  var stack = {};

  /**
   * Transforms any value to string
   *
   * @param {*} value - any value
   * @return {string} string representing original value
   */
  return function(value) {
    return handleValue(value, stack, strictPropertyOrder, null, "");
  };
};

export default serializer;
