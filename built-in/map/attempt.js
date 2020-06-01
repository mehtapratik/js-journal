function arrayMap(callback, context) {
   if (Array.isArray(this) && typeof callback == 'function') {
      var mapped = [];

      //let "this" be context if argument "context" was not specified
      context = context || this;
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