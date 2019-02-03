const getPerformanceTest = require("./util/getPerformanceTest");
const getAcceptanceTest = require("./util/getAcceptanceTest");

const values = Array.from(Array(100)).map(() => Symbol());

/*
 * Trick here is that Symbols are always unique. Symbol() !== Symbol() even when
 * using loose checking.
 */
module.exports = {
  id: 6,
  description:
    "Invoking 100x100 times using 100 different symbols as parameter",
  performanceTest: getPerformanceTest(100, 100, index => [values[index]]),
  acceptanceTest: getAcceptanceTest(100, 100, 100, index => [values[index]])
};
