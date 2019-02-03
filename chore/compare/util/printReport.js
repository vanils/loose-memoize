const table = require("table").table;
const wrap = require("word-wrap");

/**
 * Prints report of test case
 *
 * @param {Object} testCase - Current test case
 * @param {Array} resultsContainer - Results of each test against test subject
 * @return {undefined}
 */
const printReport = (testCase, resultsContainer) => {
  const results = resultsContainer.map((result, index) => {
    if (!result.isAccepted) {
      return [result.testSubject.id, result.acceptanceStatus, "-"];
    }

    const bench = result.bench;

    if (bench.error) {
      return [result.testSubject.id, `Failed: ${bench.error.message}`, "-"];
    }

    const operationsPerSecond = bench.hz.toFixed(2);
    const relativeMaginOfError = `± ${bench.stats.rme.toFixed(2)}%`;

    return [
      result.testSubject.id,
      result.acceptanceStatus,
      `${operationsPerSecond} ${relativeMaginOfError}`
    ];
  });

  const wrapOptions = {
    width: 78,
    indent: " "
  };

  const headerOutput = [
    wrap(`Test case id: ${testCase.id}`, wrapOptions),
    wrap(`Description: ${testCase.description}`, wrapOptions)
  ].join("\n");

  const rows = [
    ["Test subject", "Acceptance result", "Operations per second"]
  ].concat(results);

  const tableOutput = table(rows, {
    columns: {
      0: { width: 13, wrapWord: true },
      1: { width: 36, wrapWord: true },
      2: { width: 21, wrapWord: true }
    }
  });

  console.log(`\n${headerOutput}\n${tableOutput}`);
};

module.exports = printReport;
