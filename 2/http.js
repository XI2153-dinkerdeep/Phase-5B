const http = require('http');

const server = http.createServer((req, res) => {
    if( req.url === '/') {
        res.end('<h1>Home</h1>')
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`listening to ${PORT}...`));