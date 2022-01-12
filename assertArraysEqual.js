const eqArrays = function (arrA, arrB) {
  let maxLength = arrA.length > arrB.length ? arrA.length : arrB.length;
  if (arrA.length === maxLength && arrB.length === maxLength) {
    for (let i = 0; i < maxLength; i++) {
      if (arrA[i] > arrB[i]) {
        console.log(arrA[i], arrB[i]);
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};

const assertArraysEqual = function (actual, expected) {
  //console.log(arrTwo);
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  } else {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
