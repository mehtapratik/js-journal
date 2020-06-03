function arrayMap(callback, context) {
   if (Array.isArray(this) && typeof callback == 'function') {
      var mapped = [];

      for (let i = 0; i < this.length; i++) {
         mapped.push(
            callback.call(/* this */ context,
                          /* args */ this[i], i, this)
         );
      }

      return mapped;
   }
};

if (!Array.map) { 
   Array.map = arrayMap;
}

module.exports = arrayMap;