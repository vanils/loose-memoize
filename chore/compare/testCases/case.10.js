const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const getParam = index => ({
  key: index
});

/*
 * Let's see how multiple object values are handled
 */
module.exports = {
  id: 10,
  description:
    "Invoking 100x100 times with 100 different object values as 2 parameters",
  performanceTest: getPerformanceTest(100, 100, index => [
    getParam(index),
    getParam(index)
  ]),
  acceptanceTest: getAcceptanceTest(100, 100, 100, index => [
    getParam(index),
    getParam(index)
  ])
};
