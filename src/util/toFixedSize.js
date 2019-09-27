/**
 * Force array (or array like object) to have fixed length.
 *
 * @param {Array} array - Array to convert to fixed length.
 * @param {number} size - Fixed size of the resulting array.
 * @return {Array} array with fixed size.
 */
var toFixedSize = function(array, size) {
  var newArray;
  var i;

  if (array.length === size) {
    return array;
  }

  newArray = new Array(size);

  for (i = 0; i < size; i++) {
    newArray[i] = array[i];
  }

  return newArray;
};

export default toFixedSize;
