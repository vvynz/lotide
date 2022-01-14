const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, callback) {
  const objKeys = Object.keys(obj);
  console.log(objKeys);
  for (const prop in obj) {
    console.log(obj[prop]);
    if (objKeys[prop] !== callback[prop]) {
      return undefined;
    }

    if (objKeys[prop] === callback[prop]) {
      console.log(callback[prop]);
      return [prop];
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

//assertEqual();
