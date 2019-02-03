import toStringValue from '../util/toStringValue';
import toReference from "../util/toReference";
import handleArray from "./handleArray";
import handleObject from "./handleObject";
import getName from "./getName";

/**
 * Serializes any value
 *
 * @param {*} value - Value to serialize
 * @param {Object} stack - Stack object which holds references to unserializable
 *   values
 * @param {boolean} strictPropertyOrder - if strict property order should be
 *   used.
 * @param {Function} isSeen - Method to call to check if this value is seen
 *   before in a property chain. This protects against circular references.
 * @param {string} key - Property name of current key.
 * @return {string} serialized string
 */
var handleValue = function(value, stack, strictPropertyOrder, isSeen, propKey) {
  var type;

  if (value === null) {
    return 'null';
  }

  if (isSeen && isSeen(value)) {
    return "[[Circular]" + toStringValue(propKey) + "]";
  }

  var type = typeof value;

  switch (type) {
    case 'undefined':
    case 'number':
    case 'boolean':
      return String(value);
    case 'string':
      return toStringValue(value);
    case 'symbol':
    case 'function':
      return "[" + type + toReference(value, type, stack) + "]";
    default:
      type = Object.prototype.toString.call(value);
      switch (type) {
        case "[object Int8Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Int16Array]":
        case "[object Uint16Array]":
        case "[object Int32Array]":
        case "[object Uint32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Number]":
        case "[object Boolean]":
          return "[" + type + value.toString() + "]";
        case "[object Date]":
          return "[" + type + value.toISOString() + "]";
        case "[object RegExp]":
          return "[" + type + String(value) + " " + value.lastIndex + "]";
        case "[object String]":
          return "[" + type + toStringValue(value.toString()) + "]";
        case "[object Array]":
        case "[object Arguments]":
          return (
            "[" +
            type +
            handleArray(value, stack, strictPropertyOrder, isSeen, propKey) +
            "]"
          );
        case "[object Object]":
          return (
            "[" +
            getName(value) +
            handleObject(value, stack, strictPropertyOrder, isSeen, propKey) +
            "]"
          );
        default:
          return "[" + type + toReference(value, type, stack) + "]";
      }
  }
};

export default handleValue;
