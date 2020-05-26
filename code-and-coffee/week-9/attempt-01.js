function Logger() {
   //Queue of message objects that needs to be logged after x seconds
   this.queue = [];
   //Number of seconds since constructor was invoked
   this.elapsedSeconds = 0;
   let me = this;
   let runsEverySecond = function () {
      me.elapsedSeconds++;

      for (let request of me.queue) {
         if (me.elapsedSeconds == request.seconds) {
            console.log(request.text);
         }
      }
   };

   setInterval(runsEverySecond, 1000);
}

Logger.prototype.shouldPrintMessage = function (atTick, msg) {
   // Making sure arguments are valid, first
   if (typeof atTick != 'number'
      || Number(atTick) == 0
      || Number.isNaN(atTick)
      || typeof msg != 'string'
      || msg.trim().length == 0) {
      console.log(`Invalid arguments: atTick: ${atTick} & msg: ${msg}`)
      return false;
   }

   let shouldPrint = true;
   for (let request of this.queue) {
      if (request.text.trim() == msg.trim()
         && atTick - request.seconds < 10) {
         shouldPrint = false;
      }
   }

   if (shouldPrint) {
      this.queue.push({
         seconds: atTick,
         text: msg
      });
   }

   return shouldPrint;
};