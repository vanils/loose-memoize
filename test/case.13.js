const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

const CustomObject1 = function () {
  this.ownProperty = true;
};

CustomObject1.prototype.notOwnProperty = true;

const CustomObject2 = function () {
  this.ownProperty = true;
};

CustomObject2.prototype.ownProperty = false;
CustomObject2.prototype.notOwnProperty = true;

const getObject1 = () => {
  return {
    ownProperty: true
  };
};

const getObject2 = () => {
  return {
    ownProperty: true,
    notOwnProperty: true
  };
};

describe("memoize", () => {
  it(`should work with case 13 (a)`, () => {
    const spy = sinon.spy(object => object.ownProperty);
    const fn = memoize(spy);

    chai.expect(fn(new CustomObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(new CustomObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(new CustomObject2())).to.equal(true);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new CustomObject2())).to.equal(true);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new CustomObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(getObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(getObject2())).to.equal(true);
    chai.expect(spy.callCount).to.equal(4);
  });

  it(`should work with case 13 (b)`, () => {
    const spy = sinon.spy(object => object.ownProperty);
    const fn = memoize(spy, {
      strictPropertyOrder: true
    });

    chai.expect(fn(new CustomObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(new CustomObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn(new CustomObject2())).to.equal(true);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new CustomObject2())).to.equal(true);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new CustomObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(getObject1())).to.equal(true);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(getObject2())).to.equal(true);
    chai.expect(spy.callCount).to.equal(4);
  });
});
