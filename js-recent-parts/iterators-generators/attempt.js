var numbers = {
   *[Symbol.iterator]({
      start = 0,
      stop = 100,
      step = 1
   } = {}) {
      for (let i = start; i <= stop; i += step) {
         yield i;
      }
   }
};

module.exports = numbers;