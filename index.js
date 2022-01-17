const head = require("./head");
const tail = require("./tail");
const map = require("./map");
const middle = require("./middle");
const assertEqual = require("./assertEqual");
const assertArraysEqual = require("./assertArraysEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const letterPositions = require("./letterPositions");
const takeUntil = require("./takeUntil");
const without = require("./without");

module.exports = {
  head: head,
  tail: tail,
  map: map,
  middle: middle,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
};
