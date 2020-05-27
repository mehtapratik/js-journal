function reverseString(text) {
   var reversedText = "";
   if (typeof text == "string") {
      for (let i = text.length - 1; i >= 0; i--) {
         reversedText += text[i];
      }
   }
   return reversedText;
}

module.exports = reverseString;
