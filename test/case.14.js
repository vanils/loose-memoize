const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 14`, () => {
    const spy = sinon.spy((...args) => args.length);
    const fn = memoize(spy);
    chai.expect(fn('1', '2', '3')).to.equal(3);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(fn('3","2","1')).to.equal(1);
    chai.expect(spy.callCount).to.equal(2);
    chai.expect(fn(new String('1'), new String('2'))).to.equal(2);
    chai.expect(spy.callCount).to.equal(3);
    chai.expect(fn(new String('2"],[[object String]"1'))).to.equal(1);
    chai.expect(spy.callCount).to.equal(4);
    chai.expect(fn(new String('1"],[[object String]"2'))).to.equal(1);
    chai.expect(spy.callCount).to.equal(5);
    chai.expect(fn(new String('2"],[[object String]"1'))).to.equal(1);
    chai.expect(fn(new String('1"],[[object String]"2'))).to.equal(1);
    chai.expect(spy.callCount).to.equal(5);
  });
});