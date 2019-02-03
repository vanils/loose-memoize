const memoize = require("../dist/memoize");
const sinon = require("sinon");
const chai = require("chai");

describe("memoize", () => {
  it(`should work with case 10`, () => {
    const spy = sinon.spy(value => Object.prototype.toString.call(value));
    const fn = memoize(spy);
    chai.expect(fn(new Int8Array(127))).to.equal('[object Int8Array]');
    chai.expect(fn(new Uint8Array(127))).to.equal('[object Uint8Array]');
    chai.expect(fn(new Uint8ClampedArray(127))).to.equal('[object Uint8ClampedArray]');
    chai.expect(fn(new Int16Array(127))).to.equal('[object Int16Array]');
    chai.expect(fn(new Uint16Array(127))).to.equal('[object Uint16Array]');
    chai.expect(fn(new Int32Array(127))).to.equal('[object Int32Array]');
    chai.expect(fn(new Uint32Array(127))).to.equal('[object Uint32Array]');
    chai.expect(fn(new Float32Array(127))).to.equal('[object Float32Array]');
    chai.expect(fn(new Float64Array(127))).to.equal('[object Float64Array]');
    chai.expect(fn(new Int8Array(127))).to.equal('[object Int8Array]');
    chai.expect(fn(new Uint8Array(127))).to.equal('[object Uint8Array]');
    chai.expect(fn(new Uint8ClampedArray(127))).to.equal('[object Uint8ClampedArray]');
    chai.expect(fn(new Int16Array(127))).to.equal('[object Int16Array]');
    chai.expect(fn(new Uint16Array(127))).to.equal('[object Uint16Array]');
    chai.expect(fn(new Int32Array(127))).to.equal('[object Int32Array]');
    chai.expect(fn(new Uint32Array(127))).to.equal('[object Uint32Array]');
    chai.expect(fn(new Float32Array(127))).to.equal('[object Float32Array]');
    chai.expect(fn(new Float64Array(127))).to.equal('[object Float64Array]');
    chai.expect(fn(new Int8Array(127))).to.equal('[object Int8Array]');
    chai.expect(fn(new Uint8Array(127))).to.equal('[object Uint8Array]');
    chai.expect(fn(new Uint8ClampedArray(127))).to.equal('[object Uint8ClampedArray]');
    chai.expect(fn(new Int16Array(127))).to.equal('[object Int16Array]');
    chai.expect(fn(new Uint16Array(127))).to.equal('[object Uint16Array]');
    chai.expect(fn(new Int32Array(127))).to.equal('[object Int32Array]');
    chai.expect(fn(new Uint32Array(127))).to.equal('[object Uint32Array]');
    chai.expect(fn(new Float32Array(127))).to.equal('[object Float32Array]');
    chai.expect(fn(new Float64Array(127))).to.equal('[object Float64Array]');
    chai.expect(spy.callCount).to.equal(9);
  });
});
