function defineWorkshop() {
   var studentRecords = [];
   var currentEnrollment = [];

   return {
      addStudent,
      enrollStudent,
      printCurrentEnrollment,
      enrollPaidStudents,
      remindUnpaidStudents
   };

   function addStudent(id, name, paid) {
      studentRecords.push({
         id,
         name,
         paid
      });
   }

   function enrollStudent(id) {
      currentEnrollment.push(id);
   }

   function printCurrentEnrollment() {
      var records = currentEnrollment.map(getStudentFromId);
      records.sort(sortByNameAsc);
      
      records.forEach(printRecord);
   }

   function enrollPaidStudents() {
      var paidStudents = studentRecords.filter(needToEnroll);
      paidStudents.forEach(function enrollPaidStudent(student) {
         enrollStudent(student.id);
      });   
   }

   function remindUnpaidStudents() {
      var unpaidIds = currentEnrollment.filter(notYetPaid);
      unpaidIds.forEach(function getStudentRecord(id) {
         printRecord(getStudentFromId(id));
      });
   }

   function getStudentFromId(studentId) {
      return studentRecords.find(matchId);
      function matchId(record) {
         return (record.id == studentId);
      }
   }

   function sortByNameAsc(record1, record2) {
      if (record1.name < record2.name) return -1;
      else if (record1.name > record2.name) return 1;
      else return 0;
   }

   function printRecord(record) {
      console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
   }

   function needToEnroll(record) {
      return (record.paid && !currentEnrollment.includes(record.id));
   }

   function getStudentId(record) {
      return record.id;
   }

   function notYetPaid(studentId) {
      var record = getStudentFromId(studentId);
      return !record.paid;
   }
}

exports.defineWorkshop = defineWorkshop;
