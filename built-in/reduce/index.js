const reduceArrayTo = require('./attempt');
const sourceArray = [1, 2, 4, 6, 8, 10];

console.log('Running built-in array.reduce...');
console.log(
   sourceArray.reduce(
      function sum(reducedTo, num, idx, source) {
         console.log(`Reduced To: ${reducedTo + num}`);
         return reducedTo + num;
      }
      , 100
   )
);

console.log('Running array.reduce substitute...');
console.log(
   reduceArrayTo.call(
      sourceArray,
      function sum(reducedTo, num, idx, source) {
         console.log(`Reduced To: ${reducedTo + num}`);
         return reducedTo + num;
      }
      , 100
   )
);