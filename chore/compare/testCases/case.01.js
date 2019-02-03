const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

/*
 * Simple test which is handled properly by all libraries
 */
module.exports = {
  id: 1,
  description:
    "Invoking 100x100 times with 100 different numeric values as parameter",
  performanceTest: getPerformanceTest(100, 100, index => [index]),
  acceptanceTest: getAcceptanceTest(100, 100, 100, index => [index])
};
