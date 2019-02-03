const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 19 (a)`, () => {
    const spy = sinon.spy(value => value);
    const fn = memoize(spy);
    chai.expect(fn(undefined)).to.be.undefined;
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn()).to.be.undefined;
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn('1', undefined)).to.equal('1');
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn('1')).to.equal('1');
    chai.expect(spy.callCount).to.equal(4);
    chai.expect(fn(undefined)).to.be.undefined;
    chai.expect(fn()).to.be.undefined;
    chai.expect(fn('1', undefined)).to.equal('1');
    chai.expect(fn('1')).to.equal('1');
    chai.expect(spy.callCount).to.equal(4);
  });
  it(`should work with case 19 (b)`, () => {
    const spy = sinon.spy(value => value);
    const fn = memoize(spy, {
      argCount: 2
    });
    chai.expect(fn(undefined)).to.be.undefined;
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn()).to.be.undefined;
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn('1', undefined)).to.equal('1');
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn('1')).to.equal('1');
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(undefined)).to.be.undefined;
    chai.expect(fn()).to.be.undefined;
    chai.expect(fn('1', undefined)).to.equal('1');
    chai.expect(fn('1')).to.equal('1');
    chai.expect(spy.callCount).to.equal(2);
  });
  it(`should work with case 19 (c)`, () => {
    const spy = sinon.spy((...args) => args.length);
    const fn = memoize(spy, {
      argCount: 4
    });
    chai.expect(fn(0)).to.equal(4);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(0, 0)).to.equal(4);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(0, 0, 0, 0)).to.equal(4);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(0, 0, 0, 0, 0)).to.equal(4);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(0, 0, 0, 0, 1)).to.equal(4);
    chai.expect(spy.callCount).to.equal(3);
  });
});
