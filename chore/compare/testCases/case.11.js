const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const getParam = () => ({
  foo: "bar"
});

/*
 * Let's see how multiple object values are handled
 */
module.exports = {
  id: 11,
  description: "Invoking 100x100 times with 1 object value as 2 parameters",
  performanceTest: getPerformanceTest(100, 100, index => [
    getParam(),
    getParam()
  ]),
  acceptanceTest: getAcceptanceTest(100, 100, 1, index => [
    getParam(),
    getParam()
  ])
};
