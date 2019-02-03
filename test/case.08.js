const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

const getCircularObject1 = () => {
  const array = [{}, { type: 1 }];
  array[0].circular = array;
  return array;
};

const getCircularObject2 = () => {
  const array = [{}, { type: 2 }];
  array[0].circular = array;
  return array;
};

describe("memoize", () => {
  it(`should work with case 08`, () => {
    const spy = sinon.spy(array => array[0].circular[1].type);
    const fn = memoize(spy);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(fn(getCircularObject1())).to.equal(1);
    chai.expect(fn(getCircularObject2())).to.equal(2);
    chai.expect(spy.callCount).to.equal(2);
  });
});
