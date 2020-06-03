/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
   let charMap = {};
   let maxCount = 0;
   let maxChar;

   if (typeof text == 'string') {
      for (let char of text) {
         if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
         }
         else {
            charMap[char] = 1;
         }
      }

      for (let char in charMap) {
         if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
         }
      }      
   }

   return maxChar;
}



module.exports = maxRecurringChar;