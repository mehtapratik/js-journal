function reduceArrayTo(callback, initialValue) {
   let reducedValue;
   let startIndex = 0;
   
   if (Array.isArray(this) == false || typeof callback != 'function') {
      return;
   }

   if (initialValue) {
      reducedValue = initialValue
   } else {
      reducedValue = this[0];
      startIndex = 1;
   }

   for (let i = startIndex; i < this.length; i++) {
      reducedValue = callback(reducedValue, this[i], i, this);
   }

   return reducedValue;  
}

module.exports = reduceArrayTo;