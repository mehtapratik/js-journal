var vowelsCounter = require('./attempt-01');
// var vowelsCounter = require('./attempt-02');
// var vowelsCounter = require('./attempt-03');

test('vowelsCounter is a function', () => {
   expect(typeof vowelsCounter).toEqual('function');
});

test('returns the number of vowels found', () => {
   expect(vowelsCounter('aeiou')).toEqual(5);
});

test('returns the number of vowels found when string is capitalized', () => {
   expect(vowelsCounter('AEIOU')).toEqual(5);
});

test('returns the number of vowels found when all alphabets are passed in', () => {
   expect(vowelsCounter('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels found when string has mixed capitalization', () => {
   expect(vowelsCounter('Abcdegfizzjbhso')).toEqual(4);
});

test('returns zero number of vowels found when you pass null', () => {
   expect(vowelsCounter(null)).toEqual(0);
});

test('returns zero number of vowels found when you pass undefined', () => {
   expect(vowelsCounter(undefined)).toEqual(0);
});

test('returns zero number of vowels found when you pass nothing', () => {
   expect(vowelsCounter()).toEqual(0);
});

test('returns zero number of vowels found when you pass boolean', () => {
   expect(vowelsCounter(true)).toEqual(0);
});

test('returns zero number of vowels found when you pass number', () => {
   expect(vowelsCounter(2000000)).toEqual(0);
});
