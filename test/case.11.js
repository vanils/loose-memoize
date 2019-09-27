const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

const getObject1 = () => {
  return {
    array: [
      1,
      "2",
      null,
      {
        number: 1,
        string: "3"
      }
    ]
  };
};

const getObject2 = () => {
  return {
    array: [
      1,
      "2",
      null,
      {
        string: "3",
        number: 1
      }
    ]
  };
};

const getObject3 = () => {
  return {
    array: [
      "2",
      1,
      null,
      {
        string: "3",
        number: 1
      }
    ]
  };
};

describe("memoize", () => {
  it(`should work with case 11`, () => {
    const spy = sinon.spy(object => object.array[0]);
    const fn = memoize(spy);

    chai.expect(fn(getObject1())).to.equal(1);
    chai.expect(fn(getObject2())).to.equal(1);
    chai.expect(fn(getObject3())).to.equal("2");
    chai.expect(fn(getObject1())).to.equal(1);
    chai.expect(fn(getObject2())).to.equal(1);
    chai.expect(fn(getObject3())).to.equal("2");
    chai.expect(spy.callCount).to.equal(2);
  });
});
