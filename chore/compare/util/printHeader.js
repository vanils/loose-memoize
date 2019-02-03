const wrap = require("word-wrap");

/**
 * Print header before starting any testing
 *
 * @return {undefined}
 */
const printHeader = () => {
  const wrapOptions = {
    width: 78,
    indent: " "
  };

  const output = wrap(
    [
      "👩‍🔬👨‍🔬 Welcome to memoize test runner!",
      "\n",
      "Purpose of this runner is not only to test performance of each",
      "implementation but also how they can handle various use cases. The",
      "performance doesn't really matter if a behavior is incorrect.",
      "\n",
      "Expectation is that equal values result into cache hit. If objects are",
      "provided as arguments then deep checking should be done to figure out",
      "matches. Ignoring cache when similar values are given as input is a",
      "warning, but if different input values results into cache hit that is",
      "critical error.",
      "\n",
      "Running these test cases will take anything from 1 to 2 hours.",
      "Results will be printed after each test case so you will get data as it",
      "progresses.",
      "\n",
      "Tip: run this command with --help parameter if you want to check how",
      "to limit test cases or libraries (test subjects). This way you only test",
      "what you want and can have results faster.",
      "\n"
    ].join(" "),
    wrapOptions
  );
  console.log(`\n${output}\n`);
};

module.exports = printHeader;
