const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (strResult, countResult) {
  const result = {};

  for (const label of strResult) {
    result[label] = 0;
    if (countResult[label]) {
      for (let i = 0; i < strResult.length; i++) {
        if (strResult[i] === label) {
          result[label] += 1;
        }
        if (strResult[i] === " ") {
          strResult[i].slice(0);
        }
      }
    }
  }
  console.log(result);
  return result;
};

assertEqual(countLetters("lighthouse in the house"), []);
