function reverseString(text) {
   var reversedText = "";
   if (typeof text == "string") {
      reversedText = text.split("").reverse().join("");
   }
   return reversedText;
}

module.exports = reverseString;
