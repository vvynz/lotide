const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrA, arrB) {
  let maxLength = arrA.length > arrB.length ? arrA.length : arrB.length;
  if (arrA.length === maxLength && arrB.length === maxLength) {
    for (let i = 0; i < arrA.length; i++) {
      for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] === arrB[j]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }

  /*if (arrA.every((val, index) => val === arrB[index])) {
    return true;
  } else {
    return false;
  }*/
};

eqArrays([1, 2, 3], [1, 2, 3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
