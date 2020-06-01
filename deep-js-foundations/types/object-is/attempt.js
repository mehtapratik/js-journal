function objectIs(x, y) {
   var isXNegativeZero = isNegativeZero(x);
   var isYNegativeZero = isNegativeZero(y);

   if (isXNegativeZero || isYNegativeZero) {
      return isXNegativeZero && isYNegativeZero;
   }
   else if (isNaN(x) && isNaN(y)) {
      return true;
   }
   else {
      return x === y;
   }

   function isNegativeZero(n) {
      return n == 0 && (1 / n) == -Infinity;
   }

   function isNaN(n) {
      return typeof n == 'number' && n * 1 != n;
   }
}

module.exports = objectIs;