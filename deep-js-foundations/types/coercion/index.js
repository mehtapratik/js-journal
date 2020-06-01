var coersion = require('./attempt');


// tests:
console.log(coersion.isValidName("Frank") === true);
console.log(coersion.hoursAttended(6,10) === true);
console.log(coersion.hoursAttended(6,"10") === true);
console.log(coersion.hoursAttended("6",10) === true);
console.log(coersion.hoursAttended("6","10") === true);

console.log(coersion.isValidName(false) === false);
console.log(coersion.isValidName(null) === false);
console.log(coersion.isValidName(undefined) === false);
console.log(coersion.isValidName("") === false);
console.log(coersion.isValidName("  \t\n") === false);
console.log(coersion.isValidName("X") === false);
console.log(coersion.hoursAttended("",6) === false);
console.log(coersion.hoursAttended(6,"") === false);
console.log(coersion.hoursAttended("","") === false);
console.log(coersion.hoursAttended("foo",6) === false);
console.log(coersion.hoursAttended(6,"foo") === false);
console.log(coersion.hoursAttended("foo","bar") === false);
console.log(coersion.hoursAttended(null,null) === false);
console.log(coersion.hoursAttended(null,undefined) === false);
console.log(coersion.hoursAttended(undefined,null) === false);
console.log(coersion.hoursAttended(undefined,undefined) === false);
console.log(coersion.hoursAttended(false,false) === false);
console.log(coersion.hoursAttended(false,true) === false);
console.log(coersion.hoursAttended(true,false) === false);
console.log(coersion.hoursAttended(true,true) === false);
console.log(coersion.hoursAttended(10,6) === false);
console.log(coersion.hoursAttended(10,"6") === false);
console.log(coersion.hoursAttended("10",6) === false);
console.log(coersion.hoursAttended("10","6") === false);
console.log(coersion.hoursAttended(6,10.1) === false);
console.log(coersion.hoursAttended(6.1,10) === false);
console.log(coersion.hoursAttended(6,"10.1") === false);
console.log(coersion.hoursAttended("6.1",10) === false);
console.log(coersion.hoursAttended("6.1","10.1") === false);
