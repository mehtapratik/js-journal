var uni = require('./attempt-01');

var currentEnrollment = [410, 105, 664, 375];
uni.printRecords(currentEnrollment);
console.log("----");

currentEnrollment = uni.paidStudentsToEnroll(currentEnrollment);
uni.printRecords(currentEnrollment);
console.log("----");

uni.remindUnpaid(currentEnrollment);