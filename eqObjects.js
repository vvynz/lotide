const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      // console.log(arrA[i], arrB[i]);
      return false;
    }
  }
  return true;
};

const eqObjects = function (obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  //[a, b], [b, a] only the keys are returned
  // console.log(arr1);

  if (arr1.length !== arr2.length) {
    return false;
  }
  // if (Array.isArray(arr1) && Array.isArray(arr2)) {
  // if 2 arrays are being compared, use a callback function to compare
  //   return eqArrays(arr1, arr2);
  // }
  // k here would be the element in the array. Ex. here it would be "a"
  for (let k of arr1) {
    // here we want to check if the element in the array, is in the object
    let value1 = obj1[k];
    let value2 = obj2[k];
    // console.log(obj1[k]);

    if (value1 !== value2) {
      return false;
    }
    return true;
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, ba));
// assertEqual(eqObjects(ab, abc));
assertEqual(eqObjects(ab, ba), true);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
