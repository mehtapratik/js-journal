const uni = require('./attempt-01');
const uni2 = require('./attempt-02');
var currentEnrollment = [410, 105, 664, 375];

uni.printRecords(currentEnrollment);
console.log("----");
currentEnrollment = uni.paidStudentsToEnroll(currentEnrollment);
uni.printRecords(currentEnrollment);
console.log("----");
uni.remindUnpaid(currentEnrollment);

console.log("----");

uni2.printRecords(currentEnrollment);
console.log("----");
currentEnrollment = uni2.paidStudentsToEnroll(currentEnrollment);
uni2.printRecords(currentEnrollment);
console.log("----");
uni2.remindUnpaid(currentEnrollment);

