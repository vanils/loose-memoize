const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const getParam = index => {
  switch (index) {
    case 0:
      return [NaN, null, Infinity];
    case 1:
      return [null, null, Infinity];
    default:
      return [null, null, null];
  }
};

/*
 * Now let's get crazy by providing something that JSON.stringify is not able to
 * handle
 */
module.exports = {
  id: 8,
  description:
    "Invoking 100x3 times using 3 different small arrays as parameter",
  performanceTest: getPerformanceTest(100, 3, index => [getParam(index)]),
  acceptanceTest: getAcceptanceTest(100, 3, 3, index => [getParam(index)])
};
