const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (obj, callback) {
  const v = Object.values(obj);
  //console.log(v);

  // const result = [];
  v.forEach((el) => {
    if (callback(el) === true) {
      console.log(callback(el));
      return callback(el);
    }
  });
  return;
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
  true
);

//assertEqual();
