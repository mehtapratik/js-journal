const upper = require('./attempt');

var name = "kyle",
   twitter = "getify",
   topic = "JS Recent Parts";

console.log(upper`Hello ${name} (@${twitter}), welcome to ${topic}!`);

console.log(
   upper`Hello ${name} (@${twitter}), welcome to ${topic}!` ===
   "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
