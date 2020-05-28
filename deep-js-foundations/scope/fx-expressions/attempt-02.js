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

function printRecords(studentIds) {
   if (studentIds && Array.isArray(studentIds)) {

      var matchedStudents = studentIds.map(studentId => {
         return studentRecords.find(student => student.id == studentId);
      });

      matchedStudents = matchedStudents.sort((a, b) => {
         // ignore upper and lowercase
         var a = a.name.toUpperCase();
         var b = b.name.toUpperCase();

         if (a < b) {
            return -1;
         }
         if (a > b) {
            return 1;
         }
         else {
            return 0;      
         }
      });

      matchedStudents.forEach(student => {
         console.log(`id: ${student.id} / name: ${student.name} / paid: ${student.paid ? "Paid" : "Unpaid"}`);
      });
   }
}

function paidStudentsToEnroll(currentEnrollment) {
   let paidButNotEnrolled;
   
   paidButNotEnrolled = studentRecords.filter(student => {
      return student.paid && (student => {
         return currentEnrollment.find(studentId => student.id == studentId) != null;
      });
   });

   paidButNotEnrolled = paidButNotEnrolled.map(student => student.id);

   return [...paidButNotEnrolled, ...currentEnrollment];
}

function remindUnpaid(studentIds) {
   if (studentIds && Array.isArray(studentIds)) {
      const matchedStudents = studentIds.filter(studentId => {
         return studentRecords.find(student => {
            return student.id == studentId && student.paid == false
         });
      });
      printRecords(matchedStudents);
   }
}

module.exports = {
   printRecords,
   paidStudentsToEnroll,
   remindUnpaid
}