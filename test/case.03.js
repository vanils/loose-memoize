const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 03`, () => {
    const spy = sinon.spy(regex => regex.exec("123456789")[0]);
    const fn = memoize(spy);
    chai.expect(fn(/\d{1,2}/)).to.equal("12");
    chai.expect(fn(/\d{1,2}/)).to.equal("12");
    chai.expect(fn(/\d{1,5}/)).to.equal("12345");
    chai.expect(fn(/\d{1,5}/)).to.equal("12345");
    chai.expect(fn(/\d{1,2}/)).to.equal("12");
    chai.expect(fn(/\d{1,3}/)).to.equal("123");
    chai.expect(spy.callCount).to.equal(3);

    const regex = /\d{1,3}/;
    regex.lastIndex = 3;
    chai.expect(fn(regex)).to.equal("123");
    chai.expect(spy.callCount).to.equal(4);
  });
});
