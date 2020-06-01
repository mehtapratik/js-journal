var arrayMap = require('./attempt');
var nums   = [0, 1, 2, 3, 4, 5];
var cbnums = [5, 4, 3, 2, 1, 0];
function multiplyByTwo(cv, i, arr) {
   return cv * this[i] * 2;
}

// running callback on an array
console.log(arrayMap.call(nums, multiplyByTwo))

// running callback an array with context set to a different array
console.log(arrayMap.call(nums, multiplyByTwo, cbnums));

// running map on a non-array item
console.log(arrayMap.call("20, 30", multiplyByTwo, cbnums));

//running map without callback
console.log(arrayMap.call(nums));