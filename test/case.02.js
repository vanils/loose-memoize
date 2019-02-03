const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 02`, () => {
    const spy = sinon.spy(object => object.value);
    const fn = memoize(spy);
    chai.expect(fn({ value: 0 })).to.equal(0);
    chai.expect(fn({ value: 0 })).to.equal(0);
    chai.expect(fn({ value: 1 })).to.equal(1);
    chai.expect(fn({ value: 1 })).to.equal(1);
    chai.expect(fn({ value: 0 })).to.equal(0);
    chai.expect(fn({ value: 2 })).to.equal(2);
    chai.expect(spy.callCount).to.equal(3);
  });
});
