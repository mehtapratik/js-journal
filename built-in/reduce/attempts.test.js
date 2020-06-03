const reduceArrayTo = require('./attempt');
const sourceArray = [1, 2, 4, 6, 8, 10];

test('Output from built-in reduce fx and substitute fx should be same', () => {
   function sum(reducedTo, num) {
      return reducedTo + num;
   }
   const output1 = reduceArrayTo.call(sourceArray, sum, 100);
   const output2 = sourceArray.reduce(sum, 100);

   expect(output1.toString()).toEqual(output2.toString());
});