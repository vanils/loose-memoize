const runTestCase = require("./util/runTestCase");
const printHeader = require("./util/printHeader");
const yargs = require("yargs");
const path = require("path");
const fs = require("fs");

const getContents = dirName => {
  const dirPath = path.resolve(__dirname, dirName);
  return fs
    .readdirSync(dirPath)
    .filter(fileName => /\.js$/.test(fileName))
    .map(fileName => path.resolve(dirPath, fileName))
    .map(filePath => require(filePath));
};

const getSpecialCases = (alternative, strict) => {
  return getContents("./testSubjects/loose-memoize")
    .filter(testSubject => testSubject.alternative === alternative)
    .filter(testSubject => testSubject.strict === strict);
};

const allTestSubjects = getContents("./testSubjects");
const allTestCases = getContents("./testCases");

yargs.command(
  "* [options]",
  "run various comparison tests with loose-memoize and alternative solutions",
  yargs => {
    yargs
      .option("testCases", {
        alias: "c",
        describe: "Space separated list of test cases to run tests with",
        type: "array",
        choices: allTestCases.map(data => data.id)
      })
      .option("testSubjects", {
        alias: "s",
        describe: "Space separated list of test subjects to run tests with",
        type: "array",
        choices: allTestSubjects.map(data => data.id)
      })
      .option("alternative", {
        describe: "Include alternative version of loose-memoize (for development)",
        type: "boolean",
        default: false
      })
      .option("strict", {
        describe: "Include strict version of loose-memoize",
        type: "boolean",
        default: false
      })
      .strict();
  },
  argv => {
    printHeader();

    const selectedTestCases = argv.testCases
      ? argv.testCases.map(id => allTestCases.find(data => data.id === id))
      : allTestCases;

    const selectedTestSubjects = (argv.testSubjects
      ? argv.testSubjects.map(id =>
          allTestSubjects.find(data => data.id === id)
        )
      : allTestSubjects).concat(getSpecialCases(argv.alternative, argv.strict));

    return selectedTestCases
      .reduce((chain, testCase) => {
        return chain.then(() => runTestCase(testCase, selectedTestSubjects));
      }, Promise.resolve())
      .finally(() => {
        process.exit();
      });
  }
).argv;
