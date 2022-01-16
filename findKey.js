const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, callback) {
  // const v = Object.values(obj);
  // returns an array of object of the values i.e. [{ stars: 1 },...]
  // console.log(v[0]);

  // for (let i = 0; i < v.length; i++) {
  //   // console.log(v[i]);
  //   if (obj[i] === callback[key]) {
  //     console.log(callback(key, i));
  //   }
  // }

  for (let key in obj) {
    // callback here is to determine whether the key of the object is true
    if (callback(obj[key])) {
      console.log(callback(obj[key]));
      return key;
    }
  }
};

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 4
  ),
  undefined
);
