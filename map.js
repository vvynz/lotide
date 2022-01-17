const eqArrays = function (arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      console.log(arrA[i], arrB[i]);
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  //console.log()
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

//console.log(results);

const map = function (array, callback) {
  const result = [];

  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};
const results1 = (words, (word) => word[0]);
assertArraysEqual(
  eqArrays(map(words, results1), ["g", "c", "t", "m", "t"]),
  true
);

module.exports = map;
