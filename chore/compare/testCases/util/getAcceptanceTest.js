const sinon = require("sinon");
const chai = require("chai");

const getAcceptanceTest = (
  roundsAmount,
  valuesAmount,
  callCount,
  valueMapper
) => {
  return memoize => {
    const spy = sinon.spy((...args) => args);
    const fn = memoize(spy);

    for (let i = 0; i < roundsAmount; i++) {
      for (let j = 0; j < valuesAmount; j++) {
        chai
          .expect(
            fn.apply(null, valueMapper(j)),
            "Invalid return value from memoized method"
          )
          .to.deep.equal(valueMapper(j));
      }
    }

    /*
     * Too many calls is less severe than too less calls
     */
    if (spy.callCount > callCount) {
      return `Warning: Expected ${callCount} calls on memoized method. Got ${
        spy.callCount
      }.`;
    }

    /*
     * Now this shouldn't happen as checks above should have catched this issue.
     * having this check here just in case.
     */
    chai
      .expect(spy.callCount, "Invalid call count on memoized method")
      .to.equal(callCount);

    return "Passed";
  };
};

module.exports = getAcceptanceTest;
