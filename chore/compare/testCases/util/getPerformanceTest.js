const getPerformanceTest = (roundsAmount, valuesAmount, valueMapper) => {
  return memoize => {
    const fn = memoize((...args) => {
      return {
        value: fibonacci(25),
        args: args
      };
    });

    for (let i = 0; i < roundsAmount; i++) {
      for (let j = 0; j < valuesAmount; j++) {
        fn.apply(null, valueMapper(j));
      }
    }
  };
};

module.exports = getPerformanceTest;

const fibonacci = value => {
  return value > 1 ? fibonacci(value - 1) + fibonacci(value - 2) : 1;
};
