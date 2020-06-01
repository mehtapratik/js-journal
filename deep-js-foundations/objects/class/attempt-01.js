class Helpers {
   sortByNameAsc(record1, record2) {
      if (record1.name < record2.name) return -1;
      else if (record1.name > record2.name) return 1;
      else return 0;
   }
   printRecord(record) {
      console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
   }
   getStudentId(record) {
      return record.id;
   }
};

class Workshop extends Helpers {
   constructor() {
      super();
      this.currentEnrollment = [];
      this.studentRecords = [];
   }
   addStudent(id, name, paid) {
      this.studentRecords.push({ id, name, paid, });
   }
   enrollStudent(id) {
      if (!this.currentEnrollment.includes(id)) {
         this.currentEnrollment.push(id);
      }
   }
   printCurrentEnrollment() {
      this.printRecords(this.currentEnrollment);
   }
   enrollPaidStudents() {
      this.currentEnrollment = this.paidStudentsToEnroll();
      this.printCurrentEnrollment();
   }
   remindUnpaidStudents() {
      this.remindUnpaid(this.currentEnrollment);
   }
   getStudentFromId(studentId) {
      return this.studentRecords.find(matchId);

      // *************************

      function matchId(record) {
         return (record.id == studentId);
      }
   }
   printRecords(recordIds) {
      var records = recordIds.map(this.getStudentFromId.bind(this));

      records.sort(super.sortByNameAsc);

      records.forEach(super.printRecord);
   }
   paidStudentsToEnroll() {
      var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

      var idsToEnroll = recordsToEnroll.map(super.getStudentId);

      return [...this.currentEnrollment, ...idsToEnroll];
   }
   needToEnroll(record) {
      return (record.paid && !this.currentEnrollment.includes(record.id));
   }
   remindUnpaid(recordIds) {
      var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

      this.printRecords(unpaidIds);
   }
   notYetPaid(studentId) {
      var record = this.getStudentFromId(studentId);
      return !record.paid;
   }
}

module.exports = new Workshop();