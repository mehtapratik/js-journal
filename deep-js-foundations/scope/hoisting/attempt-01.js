module.exports ={
   printRecords,
   paidStudentsToEnroll,
   remindUnpaid
};

var studentRecords = [
   { id: 313, name: "Frank", paid: true },
   { id: 410, name: "Suzy", paid: true },
   { id: 709, name: "Brian", paid: false },
   { id: 105, name: "Henry", paid: false },
   { id: 502, name: "Mary", paid: true },
   { id: 664, name: "Bob", paid: false },
   { id: 250, name: "Peter", paid: true },
   { id: 375, name: "Sarah", paid: true },
   { id: 867, name: "Greg", paid: false },
];

function printRecords(recordIds) {
   var records = recordIds.map(getStudentFromId);
   records.sort(sortByNameAsc);
   records.forEach(printARecord);
}

function getStudentFromId(studentId) {
   return studentRecords.find(function matchId(record) {
      return record.id == studentId;
   });
}

function sortByNameAsc(record1, record2) {
   if (record1.name < record2.name) return -1;
   else if (record1.name > record2.name) return 1;
   else return 0;
}

function printARecord(record) {
   console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
   );
}

function paidStudentsToEnroll(currentEnrollment) {
   var recordsToEnroll = studentRecords.filter(function needToEnroll(record) {
      return record.paid && !currentEnrollment.includes(record.id);
   });

   var idsToEnroll = recordsToEnroll.map(getStudentId);

   return [...currentEnrollment, ...idsToEnroll];
}

function getStudentId(record) {
   return record.id;
}

function remindUnpaid(recordIds) {
   var unpaidIds = recordIds.filter(function notYetPaid(studentId) {
      var record = getStudentFromId(studentId);
      return !record.paid;
   });

   printRecords(unpaidIds);
}
