function vowelsCounter(text) {
   const VOWELS = /[aeiou]/gi;

   if (typeof text == 'string' && text.trim().length > 0) {
      return text.match(VOWELS).length;      
   }
   else {
      return 0;
   }
}

module.exports = vowelsCounter;