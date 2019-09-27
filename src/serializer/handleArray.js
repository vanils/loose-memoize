import handleValue from "./handleValue";

/**
 * Serializes array
 *
 * @param {Array} value - Array to serialize
 * @param {Object} stack - Stack object which holds references to unserializable
 *   values
 * @param {boolean} strictPropertyOrder - if strict property order should be
 *   used.
 * @param {Function} isSeen - Method to call to check if this value is seen
 *   before in a property chain. This protects against circular references.
 * @return {string} serialized string
 */
var handleArray = function(value, stack, strictPropertyOrder, isSeen, propKey) {
  var nextIsSeen = function(nextValue) {
    return value === nextValue || (isSeen && isSeen(nextValue));
  };

  var i = value.length;
  var string = "";

  /*
   * Array values are intentionally iterated from end to beginning. This makes
   * this perform a little bit faster and order doesn't really matter as long
   * as it's consistent.
   */
  while (i--) {
    string +=
      handleValue(
        value[i],
        stack,
        strictPropertyOrder,
        nextIsSeen,
        propKey + "." + i
      ) + ",";
  }

  return string;
};

export default handleArray;
