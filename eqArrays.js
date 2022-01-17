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

module.exports = eqArrays;
