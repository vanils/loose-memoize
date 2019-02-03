const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const divide = (value, divider) => {
  return Math.floor(value / divider);
};

/*
 * Multiple simple parameters with a lot of different calls
 */
module.exports = {
  id: 13,
  description:
    "Invoking 200 times with 200 different numeric values as 3 parameters",
  performanceTest: getPerformanceTest(100, 200, index => [
    divide(index, 3),
    divide(index, 2),
    index
  ]),
  acceptanceTest: getAcceptanceTest(100, 200, 200, index => [
    divide(index, 3),
    divide(index, 2),
    index
  ])
};
