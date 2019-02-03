const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

/*
 * Let's see how multiple numeric values are handled
 */
module.exports = {
  id: 9,
  description:
    "Invoking 100x100 times with 100 different numeric values as 2 parameters",
  performanceTest: getPerformanceTest(100, 100, index => [index, index]),
  acceptanceTest: getAcceptanceTest(100, 100, 100, index => [index, index])
};
