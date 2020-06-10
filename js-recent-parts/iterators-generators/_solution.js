var numbers = {
   *[Symbol.iterator]({
      start = 0,
      stop = 100,
      step = 1,
   } = {}) {
      for (let num = start; num <= stop; num += step) {
         yield num;
      }
   }
};

module.exports = numbers;
