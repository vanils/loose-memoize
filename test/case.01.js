const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 01`, () => {
    const spy = sinon.spy(value => value);
    const fn = memoize(spy);
    chai.expect(fn(0)).to.equal(0);
    chai.expect(fn(0)).to.equal(0);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(1)).to.equal(1);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(1)).to.equal(1);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(0)).to.equal(0);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(2)).to.equal(2);
    chai.expect(fn(2)).to.equal(2);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(NaN)).to.be.NaN;
    chai.expect(spy.callCount).to.equal(4);
    chai.expect(fn(Infinity)).to.equal(Infinity);
    chai.expect(spy.callCount).to.equal(5);
    chai.expect(fn(-Infinity)).to.equal(-Infinity);
    chai.expect(spy.callCount).to.equal(6);
    chai.expect(fn(new Number(0))).to.deep.equal(new Number(0));
    chai.expect(spy.callCount).to.equal(7);
    chai.expect(fn(new Number(1))).to.deep.equal(new Number(1));
    chai.expect(spy.callCount).to.equal(8);
    chai.expect(fn(new Number(1))).to.deep.equal(new Number(1));
    chai.expect(spy.callCount).to.equal(8);
    chai.expect(fn(new Number(3))).to.deep.equal(new Number(3));
    chai.expect(spy.callCount).to.equal(9);
  });
});
