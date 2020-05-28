const studentRecords = [
   { id: 313, name: "Frank", paid: true, },
   { id: 410, name: "Suzy", paid: true, },
   { id: 709, name: "Brian", paid: false, },
   { id: 105, name: "Henry", paid: false, },
   { id: 502, name: "Mary", paid: true, },
   { id: 664, name: "Bob", paid: false, },
   { id: 250, name: "Peter", paid: true, },
   { id: 375, name: "Sarah", paid: true, },
   { id: 867, name: "Greg", paid: false, },
];

function findStudentById(studentId) {
   return studentRecords.find(
      function isMatch(student) {
         return student.id == studentId;
      }
   );
}

function printAStudentRecord(student) {
   console.log(`id: ${student.id} / name: ${student.name} / paid: ${student.paid ? "Paid" : "Unpaid"}`);
}

function sortStudentsByName(studentA, studentB) {
   // ignore upper and lowercase
   var studentA = studentA.name.toUpperCase();
   var studentB = studentB.name.toUpperCase();

   if (studentA < studentB) {
      return -1;
   }
   if (studentA > studentB) {
      return 1;
   }

   return 0;
}

function printRecords(studentIds) {
   if (studentIds && Array.isArray(studentIds)) {
      var matchedStudents = studentIds.map(findStudentById);
      matchedStudents = matchedStudents.sort(sortStudentsByName);
      matchedStudents.forEach(printAStudentRecord);
   }
}

function paidStudentsToEnroll(currentEnrollment) {
   let paidButNotEnrolled;
   
   function isStudentEnrolled(student) {
      let studentId = currentEnrollment.find(function isEnrolled(studentId) {
         return (student.id == studentId);
      });

      return studentId != null;
   }
   function getPaidButNotEnrolled(student) {
      return student.paid
         && isStudentEnrolled(student) == false;
   }
   function getStudentId(student) {
      return student.id;
   }
   
   paidButNotEnrolled = studentRecords.filter(getPaidButNotEnrolled);
   paidButNotEnrolled = paidButNotEnrolled.map(getStudentId);

   return [...paidButNotEnrolled, ...currentEnrollment];
}

function remindUnpaid(studentIds) {
   function getUnpaidStudentIds(studentId) {
      function isUnapaidStudent(student) {
         return (student.id == studentId && student.paid == false);
      }

      return studentRecords.find(isUnapaidStudent);
   }

   if (studentIds && Array.isArray(studentIds)) {
      const matchedStudents = studentIds.filter(getUnpaidStudentIds);
      printRecords(matchedStudents);
   }
}

module.exports = {
   printRecords,
   paidStudentsToEnroll,
   remindUnpaid
}