/* eslint-disable no-extend-native */

const defaultPredicate = () => {
  const uniqueSet = new Set();
  return (element) => !uniqueSet.has(element) && uniqueSet.add(element);
};

Array.prototype.unique = function (predicate = defaultPredicate()) {
  return this.filter(predicate);
};
