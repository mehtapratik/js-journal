// This is most common but slowest approach.
// It is also a little less readable than looped approaches
// as it is abstracted inside "split", "reverse" and "join"
// functions. Although not very difficult, it requires awareness
// of these function to understand what's going on here.
function reverseString_1(text) {
   return text.split("").reverse().join("");
}

// Same as reverseString1 but relies on ES6 spread instead of split.
function reverseString_1_1(text) {
   return [...text].reverse().join("");
}

// Looped appoach
function reverseString_2(text) {
   let result = "";

   for (let i = text.length - 1; i >= 0; i--) {
      result += text[i];
   }

   return result;
}

// Looped approach - most readable of all of the approaches
function reverseString_2_1(text) {
   let result = "";

   for (let char of text) {
      result = char + result;
   }

   return result;
}

// Reduce method - fastest of all
// Again this one liner syntax is hard to read and functionality
// is abstracted inside split, reduce and arrow functions.
function reverseString3(text) {
   return text
      .split("")
      .reduce((acc, char) => char + acc, "");
}

// Reduce method (revised for readability)
function reverseString_3_1(text) {
   return text
      .split("")
      .reduce(function (concatenated, currentChar) {
         return currentChar + concatenated;
   });
}

// CONCLUSION: Since there isn't much performance difference between
// reduce and for loop approach, I would chose reverseString_2_1 as it
// is simple and better for readability and it also does not compromise
// performance