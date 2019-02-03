var refId = 1;

/**
 * There's no proper way to stringify values like functions and symbols. For
 * those we save the value and give that value a reference key. That reference
 * key will represent the actual value.
 *
 * @param {*} value - any value
 * @param {string} type - type of value
 * @param {Object} stack - stack object which can hold references
 * @return {string} string representing original value
 */
var toReference = function(value, type, stack) {
  var typeStack = stack[type];
  var index;
  var key;

  if (!typeStack) {
    key = "~" + refId++;
    stack[type] = {
      values: [value],
      keys: [key]
    };
    return key;
  }

  index = typeStack.values.indexOf(value);

  if (index !== -1) {
    return typeStack.keys[index];
  }

  key = "~" + refId++;
  typeStack.values.push(value);
  typeStack.keys.push(key);
  return key;
};

export default toReference;
