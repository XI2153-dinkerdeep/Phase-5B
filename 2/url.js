const url = require('url');

const myUrl = new URL("http://mywebsite.com/hello.html?id=122&status=inactive");

console.log(myUrl.href);

console.log(myUrl.host);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);