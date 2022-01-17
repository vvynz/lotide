const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, callback) {
  // const v = Object.values(obj);
  // returns an array of object of the values i.e. [{ ARMY: 1 },...]
  // console.log(v[0]);

  // for (let i = 0; i < v.length; i++) {
  //   // console.log(v[i]);
  //   if (obj[i] === callback[key]) {
  //     console.log(callback(key, i));
  //   }
  // }

  for (let key in obj) {
    // callback here is to determine whether the key of the object is truthy or falsy
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
    (x) => x.stars === 2 //callback: truthy or falsy
  ),
  "noma"
);

assertEqual(
  findKey(
    {
      "Blue Hill": { ARMY: 1 },
      Akaleri: { ARMY: 3 },
      noma: { ARMY: 2 },
      elBulli: { ARMY: 3 },
      Ora: { ARMY: 2 },
      Akelarre: { ARMY: 3 },
    },
    (x) => x.ARMY === 4
  ),
  undefined
);

assertEqual(
  findKey(
    {
      KSJ: { ARMY: 20 },
      MYG: { ARMY: 24 },
      JHS: { ARMY: 15 },
      KNJ: { ARMY: 19 },
      PJM: { ARMY: 18 },
      KTH: { ARMY: 6 },
      JJK: { ARMY: 7 },
    },
    (x) => x.ARMY === 6
  ),
  "KTH"
);

assertEqual(
  findKey(
    {
      KSJ: { age: 29, dog: 0 },
      MYG: { age: 28, dog: 1 },
      JHS: { age: 27, dog: 1 },
      20: { age: 27, dog: 2 }, //key here is a num, but the callback will return it as a string
      PJM: { age: 26, dog: 0 },
      KTH: { age: 26, dog: 1 },
      JJK: { age: 24, dog: 3 },
    },
    (x) => x.dog === 2
  ),
  "20"
);

module.exports = findKey;
