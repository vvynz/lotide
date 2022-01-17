const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["BTS", "ARMY", "BORAHAE"];

tail(words);
assertEqual(words.length, 3);

tail([100]);
assertEqual(tail.length, 1);

tail([]);
assertEqual(tail.length, 1);
