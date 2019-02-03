const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

/*
 * Simple test which is handled properly by all libraries
 */
module.exports = {
  id: 2,
  description:
    "Invoking 100x10 times with 10 different numeric values as parameter",
  performanceTest: getPerformanceTest(100, 10, index => [index]),
  acceptanceTest: getAcceptanceTest(100, 10, 10, index => [index])
};
