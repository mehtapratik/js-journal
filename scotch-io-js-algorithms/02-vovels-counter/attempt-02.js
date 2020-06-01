function vowelsCounter(text) {
   var vovels = 0; 

   if (typeof text == 'string' && text.trim().length > 0) {
      for (let char of text) {
         char = char.toLowerCase();
         if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            vovels++;
         }
      }      
   }

   return vovels;
}

module.exports = vowelsCounter;