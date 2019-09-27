const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 18`, () => {
    const spy = sinon.spy(object => object.a);
    const fn = memoize(spy);

    chai
      .expect(
        fn({
          a: "1",
          b: "2"
        })
      )
      .to.equal("1");

    chai.expect(spy.callCount).to.equal(1);

    chai.expect(
      fn({
        'b:"2",a': "1"
      })
    ).to.be.undefined;

    chai.expect(spy.callCount).to.equal(2);

    chai.expect(
      fn({
        'a:"1",b': "2"
      })
    ).to.be.undefined;

    chai.expect(spy.callCount).to.equal(3);
  });
});
