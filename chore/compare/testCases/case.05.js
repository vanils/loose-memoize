const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

/*
 * For some reason even simple regexes are too difficult to handle for many
 * libraries. Worst thing is that it's not obvious as something things work and
 * sometimes they don't. This will highlight this issue.
 */
module.exports = {
  id: 5,
  description:
    "Invoking 100x1 times using same regular expression as parameter",
  performanceTest: getPerformanceTest(100, 1, index => [
    new RegExp("[a-z]+", "g")
  ]),
  acceptanceTest: getAcceptanceTest(100, 1, 1, index => [
    new RegExp("[a-z]+", "g")
  ])
};
