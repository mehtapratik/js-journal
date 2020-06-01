function findAll(value, collection) {
   var output = [];
   if (Array.isArray(collection)) {
      for (let item of collection) {
         if (Object.is(item, value)) {
            output.push(item);
         }
         else if (typeof item == 'boolean') {
            if (typeof value == 'boolean' && item == value) {
               output.push(item);
            }
         }
         else if (item == null && value == null) {
            output.push(item);
         }
         else if (isStringOrNumber(item) && isStringOrNumber(value)) {
            if (isNaN(item) && isNaN(value)) {
               output.push(item);
            }
            else if (isNegativeZero(item) || isNegativeZero(value)) {
               if (isNegativeZero(item) && isNegativeZero(value)) {
                  output.push(item);
               }
            }
            else if (item == value) {
               output.push(item);
            }
         }
      }
   }
   return output;

   // ********************************

   function isStringOrNumber(val) {
      if (typeof val == 'string' && val.trim() != '') {
         return true;
      }
      else if (typeof val == 'number') {
         return true;
      }
   }

   function isNegativeZero(n) {
      return n == 0 && (1 / n) == -Infinity;
   }

   function isNaN(n) {
      return typeof n == 'number' && n * 1 != n;
   }
}

module.exports = findAll;