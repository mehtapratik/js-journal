function reverseString(text) {
   var reversedText = "";
   if (typeof text == "string") {
      reversedText = text.split("").reduce(function (joined, current) {
         return current + joined;
      });
   }
   return reversedText;
}

module.exports = reverseString;
