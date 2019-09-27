const memoize = require("../dist/memoize");
const fn = memoize(value => value);

const getNumericValues = () => {
  return [].concat(
    [0, 1, -1, NaN, Infinity, -Infinity].map(value => [
      value,
      new Number(value)
    ])
  );
};

const getRegexValues = () => {
  const regex1 = /\d{1,2}/;
  const regex2 = /\d{1,2}/;
  const regex3 = /\d{1,3}/;
  regex2.lastIndex = 3;
  return [regex1, regex2, regex3];
};

const getBooleanValues = () => {
  return [true, false, new Boolean(true), new Boolean(false)];
};

const getDateValues = () => {
  return [new Date(1546207200040), new Date(1546207220040)];
};

const getIndexedValues = () => {
  return [
    new Int8Array(127),
    new Uint8Array(127),
    new Uint8ClampedArray(127),
    new Int16Array(127),
    new Uint16Array(127)
  ];
};

const getFunctionValues = () => {
  return [() => {}, function() {}];
};

class CustomClass {
  constructor() {
    this.ownProperty = true;
  }
}

const CustomObject = function() {
  this.ownProperty = true;
};

CustomObject.prototype.notOwnProperty = true;

const getObjectValues = () => {
  return [new CustomObject(), new CustomClass(), {}];
};

const symbol1 = Symbol("a");
const symbol2 = Symbol("a");
const symbol3 = Symbol();
const symbol4 = Symbol();

const getSymbolValues = () => {
  return [symbol1, symbol2, symbol3, symbol4];
};

const invoke = (arg1, arg2, arg3) => {
  fn(arg1);
  fn(arg1, arg2);
  fn(arg1, arg2, arg3);
};

const toProps = value => {
  const circular = {
    array: [value],
    object: {
      value
    }
  };

  circular.array[1] = circular.array;
  circular.array[2] = circular.object;
  circular.object.object = circular.object;
  circular.object.array = circular.array;

  return [
    value,
    { value },
    { prop: { value } },
    { prop: [value] },
    { prop: [{ value }] },
    circular
  ];
};

for (let i = 0, j = 10; i < j; i++) {
  const valueGroups = [
    getNumericValues(),
    getRegexValues(),
    getSymbolValues(),
    getDateValues(),
    getIndexedValues(),
    getObjectValues(),
    getBooleanValues(),
    getFunctionValues()
  ]
    .map(valueGroup => {
      return Array.prototype.concat.apply(toProps(valueGroup));
    })
    .forEach(valueGroup => {
      valueGroup.forEach(value => {
        invoke(value, value, value);
      });
    });
}

function myFunc(nb) {
  return nb + nb;
}

for (let i = 0; i < 2000; ++i) {
  myFunc(i);
}

for (let i = 0; i < 2000; ++i) {
  myFunc(i + "");
}
