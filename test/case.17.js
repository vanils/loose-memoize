const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 17`, () => {
    const spy = sinon.spy(value => value);
    const fn = memoize(spy);

    const fn1 = () => {};
    const fn2 = () => {};
    const fn3 = function() {};
    const fn4 = function() {
      // something
    };
    const fn5 = function(value) {
      return value;
    };
    chai.expect(fn(fn1)).to.equal(fn1);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(fn1)).to.equal(fn1);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(fn2)).to.equal(fn2);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(fn3)).to.equal(fn3);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(new fn3())).to.deep.equal(new fn3());
    chai.expect(spy.callCount).to.equal(4);
    chai.expect(fn(new fn3())).to.deep.equal(new fn3());
    chai.expect(spy.callCount).to.equal(4);
    chai.expect(fn(new fn5())).to.deep.equal(new fn5());
    chai.expect(spy.callCount).to.equal(5);
    chai.expect(fn(fn5)).to.deep.equal(fn5);
    chai.expect(spy.callCount).to.equal(6);
  });
});
