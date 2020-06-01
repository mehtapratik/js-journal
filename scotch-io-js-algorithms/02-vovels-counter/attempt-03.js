function vowelsCounter(text) {
   var vovels = 0;

   if (typeof text == 'string' && text.trim().length > 0) {
      vovels = text
                  .split("")
                  .reduce(findVovels, 0 /* Initial value */);
   }

   return vovels;

   // ***********************

   function findVovels(counter, char) {
      char = char.toLowerCase();
      if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
         counter++;
      }

      return counter;
   }
}


module.exports = vowelsCounter;