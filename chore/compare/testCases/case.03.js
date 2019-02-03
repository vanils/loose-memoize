const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

/*
 * Simple test which is handled properly by all libraries
 */
module.exports = {
  id: 3,
  description: "Invoking 100x100 times using same numeric value as parameter",
  performanceTest: getPerformanceTest(100, 1, index => ['string""' + index]),
  acceptanceTest: getAcceptanceTest(100, 1, 1, index => ['string""' + index])
};
