const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  console.log(array.slice(1));
};

const words = ["BTS", "ARMY", "BORAHAE"];
tail(words);
assertEqual(words.length, 3);

tail([100]);
assertEqual(tail.length, 3);

tail([]);
assertEqual(tail.length, 1);
