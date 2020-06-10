const numbers = require('./attempt');

// should print 0..100 by 1s
for (let num of numbers) {
   console.log(num);
}

console.log(
   `My lucky numbers are: ${
   [...numbers[Symbol.iterator]({
      start: 6,
      stop: 30,
      step: 4,
   })]}`
);