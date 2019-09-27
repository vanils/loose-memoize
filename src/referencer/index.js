import toStringValue from "../util/toStringValue";
import toReference from "../util/toReference";

/**
 * Referencer factory.
 *
 * @return {Function} function which will convert values to references
 */
var referencer = function() {
  /*
   * This object will hold memory values and return string
   */
  var memory = {};

  /**
   * Transforms any value to string
   *
   * @param {*} value - any value
   * @return {string} string representing original value
   */
  return function(value) {
    if (value === null) {
      return "null";
    }

    var type = typeof value;

    switch (type) {
      case "undefined":
      case "number":
      case "boolean":
        return String(value);
      case "string":
        return toStringValue(value);
      case "symbol":
      case "function":
        return toReference(value, type, memory);
      default:
        return toReference(
          value,
          Object.prototype.toString.call(value),
          memory
        );
    }
  };
};

export default referencer;
