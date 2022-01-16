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

const without = function (arr, itemsToRemove) {
  const newArr = arr;
  // const output = newArr.filter((el) => el !== itemsToRemove);
  const output = newArr.filter((el) => !itemsToRemove.includes(el));
  console.log(output);
  return output;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
without(["MYG", "JHS", "PJM"], ["PJM"]);
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// without([1, 2, 3], [1]);
