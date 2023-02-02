/* eslint-disable no-extend-native */
Number.prototype.between = function (
  lowerBound = Number.MIN_VALUE,
  upperBound = Number.MAX_VALUE
) {
  return this >= lowerBound && this <= upperBound;
};

Number.randomBetween = (
  lowerBound = Number.MIN_VALUE,
  upperBound = Number.MAX_VALUE
) => Math.random() * (upperBound - lowerBound) + lowerBound;

Number.randomIntBetween = (
  lowerBound = Number.MIN_SAFE_INTEGER,
  upperBound = Number.MAX_SAFE_INTEGER
) => Math.round(Number.randomBetween(lowerBound, upperBound));
