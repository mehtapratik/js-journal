function upper(strings, ...values) {
   var s = "";
   for (let i = 0; i < strings.length; i++) {
      if (i > 0) {
         s += String(values[i - 1]).toUpperCase();
      }
      s += strings[i];
   }
   return s;
}

module.exports = upper;