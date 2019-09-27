const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

const getObject = difference => {
  return {
    array: [
      1,
      "2",
      null,
      {
        number: 1,
        string: "3",
        difference
      }
    ]
  };
};

describe("memoize", () => {
  it(`should work with case 05`, () => {
    const spy = sinon.spy(object => object.array[3].difference);
    const fn = memoize(spy);
    chai.expect(fn(getObject(NaN))).to.be.NaN;
    chai.expect(fn(getObject(null))).to.be.null;
    chai.expect(fn(getObject(null))).to.be.null;
    chai.expect(fn(getObject(NaN))).to.be.NaN;
    chai.expect(fn(getObject(Infinity))).to.equal(Infinity);
    chai.expect(fn(getObject(NaN))).to.be.NaN;
    chai.expect(fn(getObject(undefined))).to.be.undefined;
    chai.expect(fn(getObject(Infinity))).to.equal(Infinity);
    chai.expect(fn(getObject(null))).to.be.null;
    chai.expect(fn(getObject(0))).to.equal(0);
    chai.expect(fn(getObject(""))).to.equal("");
    chai.expect(fn(getObject("false"))).to.equal("false");
    chai.expect(fn(getObject("null"))).to.equal("null");
    chai.expect(fn(getObject("NaN"))).to.equal("NaN");
    chai.expect(fn(getObject("Infinity"))).to.equal("Infinity");
    chai.expect(fn(getObject("0"))).to.equal("0");
    chai.expect(fn(getObject("NaN"))).to.equal("NaN");
    chai.expect(fn(getObject("null"))).to.equal("null");
    chai.expect(spy.callCount).to.equal(11);
  });
});
