const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 09`, () => {
    const spy = sinon.spy(date => date.getTime());
    const fn = memoize(spy);
    chai.expect(fn(new Date(1546207200040))).to.equal(1546207200040);
    chai.expect(fn(new Date(1546207200040))).to.equal(1546207200040);
    chai.expect(fn(new Date(1546207200040))).to.equal(1546207200040);
    chai.expect(fn(new Date(1546207203640))).to.equal(1546207203640);
    chai.expect(fn(new Date(1546207200040))).to.equal(1546207200040);
    chai.expect(fn(new Date(1546207203640))).to.equal(1546207203640);
    chai.expect(spy.callCount).to.equal(2);
  });
});
