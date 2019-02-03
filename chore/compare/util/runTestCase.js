const spinnerGeneratorFactory = require("./spinnerGeneratorFactory");
const printReport = require("./printReport");
const Benchmark = require("benchmark");

/**
 * Runs one test case for each specified test subject.
 *
 * @param {Object} testCase - Current test case
 * @param {Array} testSubjects - Array of test subjects
 * @return {Promise} Promise which is resolved when test case has completed
 *   running.
 */
const runTestCase = (testCase, testSubjects) => {
  const spinnerGenerator = spinnerGeneratorFactory(testCase, testSubjects);

  return new Promise(resolve => {
    const resultsContainer = testSubjects.map(testSubject => {
      let acceptanceStatus;

      try {
        acceptanceStatus = testCase.acceptanceTest(testSubject.memoize);
      } catch (e) {
        spinnerGenerator.next();
        return {
          testSubject: testSubject,
          acceptanceStatus: `Failed: ${e.message}`,
          isAccepted: false,
          bench: null
        };
      }

      return {
        acceptanceStatus,
        testSubject: testSubject,
        isAccepted: true,
        bench: new Benchmark(() => {
          return testCase.performanceTest(testSubject.memoize);
        })
      };
    });

    const benches = resultsContainer
      .filter(data => data.isAccepted)
      .map(data => data.bench);

    if (!benches.length) {
      printReport(testCase, resultsContainer);
      resolve();
    }

    Benchmark.invoke(benches, {
      name: "run",
      args: { async: true },
      queued: true,

      onStart: () => {
        spinnerGenerator.next();
      },

      onCycle: event => {
        spinnerGenerator.next();
      },

      onComplete: () => {
        printReport(testCase, resultsContainer);
        resolve();
      }
    });
  });
};

module.exports = runTestCase;
