/* eslint-disable no-extend-native */

String.prototype.upperCaseFirst = function () {
  return this.slice(0, 1).toUpperCase() + this.slice(1);
};
