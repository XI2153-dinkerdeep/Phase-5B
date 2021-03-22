const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method);
    // lodash
    let num = _.random(0,20);
    console.log(num);

    //set HEADER
    res.setHeader('Content-Type', 'text/html');
    
    let path = './views/';
    switch(req.url) {
        case '/' :
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me' :
            res.statusCode = 301;
            res.setHeader('Location', './about');
            res.end();
            break;
        case '/about-us' :
            res.statusCode = 301;
            res.setHeader('Location', './about');
            res.end();
            break;
        default :
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // send an html file
    // res.write('<p>hello, World</p>');
    // res.write('<p>hello AGAIN, World</p>');
    // res.end();
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end(); 
        }
        //res.write(data);
        res.end(data);
    })
});
//const PORT = process.env.PORT(3000 ||  )

server.listen(3000, 'localhost', () => {
    console.log(`listening for requests on port 3000`);
})