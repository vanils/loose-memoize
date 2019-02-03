const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const getParam = index => ({
  key: index
});

/*
 * Checking easy objects.
 */
module.exports = {
  id: 7,
  description:
    "Invoking 100x100 times using 100 different simple objects as parameter",
  performanceTest: getPerformanceTest(100, 100, index => [getParam(index)]),
  acceptanceTest: getAcceptanceTest(100, 100, 100, index => [getParam(index)])
};
