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

const letterPositions = function (sentence) {
  const results = {};
  //sentence = sentence.replace(/\s/g, "");
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] !== " ") {
      results[sentence[i]].push(i);
    }
    if (sentence[i] !== " ") {
      results[sentence[i]] = [i];
    }
  }

  //console.log(value);
  console.log(results);
  return results;
};

//assertArraysEqual(letterPositions("hello").e, [1]);
letterPositions("hello");

//const a = "hello";
//console.log(a[0]);
/* if (results[label] === sentence[label]) {
      results[label] = 0;
      if (value[label] === sentence[label]) {
        value.push(sentence.indexOf(label));
      }

      //if (value[label] === results[label]) {
      // results[label] = value;
      //}
    } */
