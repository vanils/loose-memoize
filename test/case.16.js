const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 16`, () => {
    const spy = sinon.spy(value => value);
    const fn = memoize(spy);
    chai.expect(fn(true)).to.equal(true);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(true)).to.equal(true);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(false)).to.equal(false);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new Boolean(false))).to.deep.equal(new Boolean(false));
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(new Boolean(false))).to.deep.equal(new Boolean(false));
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(new Boolean(true))).to.deep.equal(new Boolean(true));
    chai.expect(spy.callCount).to.equal(4);
  });
});
