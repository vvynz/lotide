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
