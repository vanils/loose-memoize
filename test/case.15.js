const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 15`, () => {
    const spy = sinon.spy(value => value);
    const fn = memoize(spy);
    chai.expect(fn("1234")).to.equal("1234");
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn("1234")).to.equal("1234");
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(new String("1234"))).to.deep.equal(new String("1234"));
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new String("1234"))).to.deep.equal(new String("1234"));
    chai.expect(spy.callCount).to.equal(2);
  });
});
