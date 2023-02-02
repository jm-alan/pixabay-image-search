/* eslint-disable no-extend-native */
RegExp.prototype.concat = function (pattern) {
  if (!pattern) return this;
  if (!(pattern instanceof RegExp)) {
    throw new TypeError(`${pattern.constructor.name} is not a regular expression literal or an instance of RegExp`);
  }
  return new RegExp(this.source + pattern.source);
};
