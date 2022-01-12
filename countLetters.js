const countLetters = function (strMessage) {
  const result = {};

  for (const label of strMessage) {
    if (label !== " ") {
      if (result[label]) {
        result[label] += 1;
      } else {
        result[label] = 1;
      }
    }
  }
  console.log(result);
  return result;
};

countLetters("lighthouse in the house");
