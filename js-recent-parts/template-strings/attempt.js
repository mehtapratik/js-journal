function upper(strings, ...values) { 
   var str = '';
   for (let i = 0; i < strings.length; i++) {
      if (i > 0) {
         str += String(values[i - 1]).toUpperCase();
      }
      str += strings[i];
   }
   return str;
}

module.exports = upper;