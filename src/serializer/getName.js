/**
 * Get name of the objects contructor method. This should help to differiante
 * between custom objects.
 *
 * @param {*} value - Value to get type from
 * @return {string} type key
 */
var getName = function(value) {
  return value.constructor && value.constructor.name
    ? "[custom " + value.constructor.name + "]"
    : "[object Object]";
};

export default getName;
