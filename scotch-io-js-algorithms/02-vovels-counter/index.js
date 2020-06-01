const vowelsCounter = require('./attempt-01');

console.log(typeof vowelsCounter == 'function');
console.log(vowelsCounter('aeiou') == 5)
console.log(vowelsCounter('AEIOU') == 5)
console.log(vowelsCounter('abcdefghijklmnopqrstuvwxyz') == 5)
console.log(vowelsCounter('Abcdegfizzjbhso') == 4).toEqual(4);
console.log(vowelsCounter(null) == 0).toEqual(0);
console.log(vowelsCounter(undefined) == 0).toEqual(0);
console.log(vowelsCounter() == 0).toEqual(0);
console.log(vowelsCounter(true) == 0).toEqual(0);
console.log(vowelsCounter(2000000) == 0).toEqual(0);
