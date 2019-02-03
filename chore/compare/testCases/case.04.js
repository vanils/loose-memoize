const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

/*
 * First test with regexes.
 */
module.exports = {
  id: 4,
  description:
    "Invoking 100x100 times using 100 different regular expressions as parameter",
  performanceTest: getPerformanceTest(100, 100, index => [
    new RegExp("" + index, "g")
  ]),
  acceptanceTest: getAcceptanceTest(100, 100, 100, index => [
    new RegExp("" + index, "g")
  ])
};
