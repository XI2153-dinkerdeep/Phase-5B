const fs = require('fs');

//reading files
// fs.readFile('./Docs/Hello.txt', (err, data) => {
//     if(err) console.log(err);

//     console.log(data.toString());
// });

// //writing files
// fs.writeFile('./Docs/Hello.txt', 'How are you?', () =>{
//     console.log('file was written');
// });

// directories
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });
// }
// else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }

// deleting files
if (fs.existsSync('./Docs/Hello.txt')) {
    fs.unlink('./Docs/Hello.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    }); 
}