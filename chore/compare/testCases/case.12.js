const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const getParam = index => ({
  foo: Math.floor(index / 2)
});

/*
 * Let's see how multiple object values are handled
 */
module.exports = {
  id: 12,
  description:
    "Invoking 100x100 times with 50 different object values as 2 parameters",
  performanceTest: getPerformanceTest(100, 100, index => [
    getParam(index),
    getParam(index)
  ]),
  acceptanceTest: getAcceptanceTest(100, 100, 50, index => [
    getParam(index),
    getParam(index)
  ])
};
