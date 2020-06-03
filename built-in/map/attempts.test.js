const arrayMap = require('./attempt');


test('Output from built-in map fx and substitute fx should be same: explicit this', () => {
   var nums = [0, 1, 2, 3, 4, 5];
   var multiplier = [5, 4, 3, 2, 1, 0];

   function multiply(cv, i, arr) {
      return cv * this[i];
   }

   const actual = arrayMap.call(nums, multiply, multiplier);
   const expected = nums.map(multiply, multiplier);

   expect(actual.toString()).toEqual(expected.toString());
});

test('Output from built-in map fx and substitute fx should be same: implicit this', () => {
   var nums = [0, 1, 2, 3, 4, 5];

   function multiplyByTwo(cv, i, arr) {
      return cv * 2;
   }

   const actual = arrayMap.call(nums, multiplyByTwo);
   const expected = nums.map(multiplyByTwo);

   expect(actual.toString()).toEqual(expected.toString());
});