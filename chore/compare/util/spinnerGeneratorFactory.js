const ora = require("ora");

/**
 * Get spinner generator which is easy to use to describe the progress.
 *
 * @param {Object} testCase - Current test case
 * @param {Array} testSubjects - Array of test subjects
 * @return {GeneratorFunction} generator to create process generator. Invoke
 *   next for each completed test subject and eventually it will automatically
 *   stop itself when all test subjects are handled
 */
const spinnerGeneratorFactory = function*(testCase, testSubjects) {
  const spinner = ora().start();
  const total = testSubjects.length;
  let completed = 0;

  while (completed < total) {
    const prefix = `Running test case ${testCase.id}...`;
    const postfix = `(${completed++}/${total} subjects completed)`;
    spinner.text = `${prefix} ${postfix}`;
    yield spinner;
  }

  return spinner.stop();
};

module.exports = spinnerGeneratorFactory;
