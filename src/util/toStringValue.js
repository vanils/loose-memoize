var quoteRegex = /"/g;

/**
 * String values needs to be quoted to make it present string and therefor
 * quotes within the string needs to be escaped.
 *
 * @param {string} string - string to be converted to string value
 * @return {string} string value
 */
var toStringValue = function(string) {
  quoteRegex.lastIndex = 0;
  return quoteRegex.test(string)
    ? '"' + string.replace(quoteRegex, '\\"') + '"'
    : '"' + string + '"';
};

export default toStringValue;
