/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
   let charMap = [];

   // creating an array of { char: <c>, count: <n> } objects
   for (let char of text) {
      const charIdx = charMap.findIndex(function findChar(charObj) {
         return (charObj.char == char);
      });

      if (charIdx < 0) {
         charMap.push({ char: char, count: 1 });
      }
      else {
         let charObj = charMap[charIdx];
         charObj.count += 1;
         charMap[charIdx] = charObj;
      }
   }

   // reducing to one object with most count
   let mostCount = charMap.reduce(
      // reducer
      function reduceToAChar(final, current) {
         if (final.count < current.count) {
            return current;
         } else {
            return final;
         }
      },
      //initial value of accumulator argument, "final"
      { char: null, count: 0 }
   );

   return mostCount.char;
}



module.exports = maxRecurringChar;