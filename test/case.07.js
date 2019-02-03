const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

const getObject = difference => {
  return {
    array: [1, '2', null, {
      number: 1,
      string: '3',
      difference
    }]
  };
};

describe("memoize", () => {
  it(`should work with case 07`, () => {
    const spy = sinon.spy(object => object.array[3].difference);
    const fn = memoize(spy);

    const symbol1 = Symbol();
    const symbol2 = Symbol();
    const symbol3 = Symbol('labelled');
    const symbol4 = Symbol('labelled');

    chai.expect(fn(getObject(symbol1))).to.equal(symbol1);
    chai.expect(fn(getObject(symbol1))).to.equal(symbol1);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol3))).to.equal(symbol3);
    chai.expect(fn(getObject(symbol4))).to.equal(symbol4);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol1))).to.equal(symbol1);
    chai.expect(fn(getObject(symbol1))).to.equal(symbol1);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol3))).to.equal(symbol3);
    chai.expect(fn(getObject(symbol4))).to.equal(symbol4);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol1))).to.equal(symbol1);
    chai.expect(fn(getObject(symbol1))).to.equal(symbol1);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol3))).to.equal(symbol3);
    chai.expect(fn(getObject(symbol4))).to.equal(symbol4);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(fn(getObject(symbol2))).to.equal(symbol2);
    chai.expect(spy.callCount).to.equal(4);
  });
});
