import toStringValue from '../util/toStringValue';
import handleValue from "./handleValue";

/**
 * Serializes object
 *
 * @param {Object} value - Object to serialize
 * @param {Object} stack - Stack object which holds references to unserializable
 *   values
 * @param {boolean} strictPropertyOrder - if strict property order should be
 *   used.
 * @param {Function} isSeen - Method to call to check if this value is seen
 *   before in a property chain. This protects against circular references.
 * @return {string} serialized string
 */
var handleObject = function(value, stack, strictPropertyOrder, isSeen, propKey) {
  var nextIsSeen = function(nextValue) {
    return value === nextValue || (isSeen && isSeen(nextValue));
  };

  return strictPropertyOrder
    ? handleObjectStrict(value, stack, nextIsSeen, propKey)
    : handleObjectLoose(value, stack, nextIsSeen, propKey);
};

export default handleObject;

/**
 * Serializes object using loose property order (keys are handled orderless)
 *
 * @param {Object} value - Object to serialize
 * @param {Object} stack - Stack object which holds references to unserializable
 *   values
 * @param {Function} isSeen - Method to call to check if this value is seen
 *   before in a property chain. This protects against circular references.
 * @return {string} serialized string
 */
var handleObjectLoose = function(value, stack, isSeen, propKey) {
  var keys = Object.keys(value).sort();
  var i = keys.length;
  var string = "";
  var key;

  while (i--) {
    key = keys[i];
    string += toStringValue(key) + ":" + handleValue(value[key], stack, false, isSeen, propKey + '.' + key) + ",";
  }

  return string;
};

/**
 * Serializes object using strict property order. Keys are iterated in order
 * which for-in loop performs.
 *
 * @param {Object} value - Object to serialize
 * @param {Object} stack - Stack object which holds references to unserializable
 *   values
 * @param {Function} isSeen - Method to call to check if this value is seen
 *   before in a property chain. This protects against circular references.
 * @return {string} serialized string
 */
var handleObjectStrict = function(value, stack, isSeen, propKey) {
  var string = "";

  for (var key in value) {
    if (value.hasOwnProperty(key)) {
      string += toStringValue(key) + ":" + handleValue(value[key], stack, true, isSeen, propKey + '.' + key) + ",";
    }
  }

  return string;
};
