const expect = require("chai").expect;
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const middle = require("../middle");

// assertArraysEqual(eqArrays(middle([1]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2]), []), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7]), [4]), true);

describe("#middle", () => {
  it("returns [] for [1]", () => {
    const num = [1];
    const result = middle(num);
    const expectedResult = [];
    expect(result).to.deep.equal(expectedResult);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const num = [1, 2, 3, 4, 5];
    const result = middle(num);
    const expectedResult = [3];
    expect(result).to.deep.equal(expectedResult);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const num = [1, 2, 3, 4, 5, 6];
    const result = middle(num);
    const expectedResult = [3, 4];
    expect(result).to.deep.equal(expectedResult);
  });
});
