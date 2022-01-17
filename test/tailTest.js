const expect = require("chai").expect;
const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Hi", "hello", "bye"];

// tail(words);
// assertEqual(words.length, 3);

// tail([100]);
// assertEqual(tail.length, 1);

// tail([]);
// assertEqual(tail.length, 1);

describe("#tail", () => {
  it("returns ['hello', 'bye'] for ['Hi', 'hello', 'bye']", () => {
    const words = ["Hi", "hello", "bye"];
    const result = tail(words);
    const expectedResult = ["hello", "bye"];
    expect(result).to.deep.equal(expectedResult);
  });
  it("returns 1 for []", () => {
    const emptyArr = [];
    const result = tail([]);
    const expectedResult = [];
    expect(result).to.deep.equal(expectedResult);
  });
  it("returns 100 for [100]", () => {
    const numArr = [100];
    const result = tail([100]);
    const expectedResult = [];
    expect(result).to.deep.equal(expectedResult);
  });
});
