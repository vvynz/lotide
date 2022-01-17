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

const takeUntil = function (array, callback) {
  const output = [];
  for (let item of array) {
    output.push(callback(item));
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = (data1, (x) => x < 0);
//console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = (data2, (x) => x === ",");

const age = [19, 7, 93, 42, 1, 2, 20, 69];
const results3 = (age, (a) => a < 19);

assertArraysEqual(
  eqArrays(takeUntil(data2, results2), ["I've", "been", "to", "Hollywood"]),
  false
);
assertArraysEqual(eqArrays(takeUntil(data1, results1), [1, 2, 5, 7, 2]), false);
assertArraysEqual(eqArrays(takeUntil(age, results3), [93, 42, 20, 69]), false);

module.exports = takeUntil;
