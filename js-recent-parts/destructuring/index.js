const {
   fakeAjax,
   handleResponse
} = require('./attempt');

fakeAjax("http://get-the-workshop.tld", handleResponse);
