function isValidName(name) {
   return (typeof name === 'string' && name.trim().length >= 3)
}
function hoursAttended(attended, length) {
   var flag = false;

   if (isStringOrNumber(attended) && isStringOrNumber(length)) {
      attended = Number(attended);
      length = Number(length);
      if (attended > 0 && length > 0
         && attended <= length
         && Number.isInteger(attended) && Number.isInteger(length)) {
         flag = true;
      }
   }

   return flag;

   // ****************************
   function isStringOrNumber(val) {
      if (typeof val == 'string' && val.trim() != '') {
         return true;
      }
      else if (typeof val == 'number') {
         return true;
      }
   }
}

module.exports = {
   isValidName,
   hoursAttended
};