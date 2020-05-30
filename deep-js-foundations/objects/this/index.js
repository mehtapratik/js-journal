var deepJS = require('./attempt-01');

deepJS.addStudent(311, "Frank",/*paid=*/true);
deepJS.addStudent(410, "Suzy",/*paid=*/true);
deepJS.addStudent(709, "Brian",/*paid=*/false);
deepJS.addStudent(105, "Henry",/*paid=*/false);
deepJS.addStudent(502, "Mary",/*paid=*/true);
deepJS.addStudent(664, "Bob",/*paid=*/false);
deepJS.addStudent(250, "Peter",/*paid=*/true);
deepJS.addStudent(375, "Sarah",/*paid=*/true);
deepJS.addStudent(867, "Greg",/*paid=*/false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/


// ********************************