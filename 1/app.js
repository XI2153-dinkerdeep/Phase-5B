const log = require('./logger.js');
const os = require('os');  
const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) => {
    console.log('Listener called', arg);
});

emitter.emit('messageLogged',{ id: 1, url: "http://"});

// console.log(__filename);
// console.log(__dirname);

var freeMemory = os.freemem();
var totalMemory = os.totalmem();

//console.log(`Free Memory: ${freeMemory} and Total Memory: ${totalMemory}`);

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./',(err, files) => {
    if(err) console.log(err);
    else console.log('Result:',files);
})

//log('Hello World');