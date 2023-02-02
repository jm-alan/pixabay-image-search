/* eslint-disable no-extend-native */

String.random = function (nChars = 1) {
  nChars = Math.max(nChars, 0);
  let res = '';
  for (let i = 0; i < nChars; i++) {
    res += String.fromCharCode(Number.randomIntBetween(32, 126));
  }
  return res;
};

String.random.letters = function (nChars = 1) {
  nChars = Math.max(nChars, 0);
  let res = '';
  for (let i = 0; i < nChars; i++) {
    res += String.fromCharCode(
      [
        Number.randomIntBetween(65, 65 + 25),
        Number.randomIntBetween(97, 97 + 25)
      ][Number.randomIntBetween(0, 1)]
    );
  }
  return res;
};

String.random.numbers = function (nChars = 1) {
  nChars = Math.max(nChars, 0);
  let res = '';
  for (let i = 0; i < nChars; i++) {
    res += String.fromCharCode(Number.randomIntBetween(48, 57));
  }
  return res;
};

let lettersAndNumbers = '0123456789';
for (let i = 0; i < 26; i++) lettersAndNumbers += String.fromCharCode(65 + i);
for (let i = 0; i < 26; i++) lettersAndNumbers += String.fromCharCode(97 + i);

String.random.lettersAndNumbers = function (nChars = 1) {
  nChars = Math.max(nChars, 0);
  let res = '';
  for (let i = 0; i < nChars; i++) {
    res += lettersAndNumbers[Number.randomIntBetween(0, 61)];
  }
  return res;
};

const randomSyms = [];
for (let i = 32; i < 48; i++) {
  randomSyms.push(String.fromCharCode(i));
}
for (let i = 58; i < 65; i++) {
  randomSyms.push(String.fromCharCode(i));
}
for (let i = 91; i < 97; i++) {
  randomSyms.push(String.fromCharCode(i));
}
randomSyms.push('{', '|', '}');
const symsBound = randomSyms.length - 1;

String.random.symbols = function (nChars = 1) {
  nChars = Math.max(nChars, 0);
  let res = '';
  for (let i = 0; i < nChars; i++) {
    res += randomSyms[Number.randomIntBetween(0, symsBound)];
  }
  return res;
};
