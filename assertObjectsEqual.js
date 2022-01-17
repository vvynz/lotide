const eqObjects = function (obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let k of arr1) {
    let value1 = obj1[k];
    let value2 = obj2[k];

    if (value1 !== value2) {
      return false;
    }
    return true;
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual !== expected) {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  } else {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual((ab, ba), (ab, ba));

module.exports = assertObjectsEqual;
