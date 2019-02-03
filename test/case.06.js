const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 06`, () => {
    const spy = sinon.spy(array => array[0]);
    const fn = memoize(spy);
    const symbol1 = Symbol();
    const symbol2 = Symbol();
    const symbol3 = Symbol('labelled');
    const symbol4 = Symbol('labelled');

    chai.expect(fn([symbol1])).to.equal(symbol1);
    chai.expect(fn([symbol1])).to.equal(symbol1);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol3])).to.equal(symbol3);
    chai.expect(fn([symbol4])).to.equal(symbol4);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol1])).to.equal(symbol1);
    chai.expect(fn([symbol1])).to.equal(symbol1);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol3])).to.equal(symbol3);
    chai.expect(fn([symbol4])).to.equal(symbol4);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol1])).to.equal(symbol1);
    chai.expect(fn([symbol1])).to.equal(symbol1);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol3])).to.equal(symbol3);
    chai.expect(fn([symbol4])).to.equal(symbol4);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(fn([symbol2])).to.equal(symbol2);
    chai.expect(spy.callCount).to.equal(4);
  });
});
