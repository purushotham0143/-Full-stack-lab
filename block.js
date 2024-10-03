// Recording in phone 
// javascript is syncronus way and browser will perform asyncromus functionality
// js is single threaded*

// *blocking code
// like until data come we will not perform any operations
// when we will use syncronus approach then we will use blocing that means 
// it will not go to next line until the current line is exexuted eg: file reading syncronus



// *nonblocking code
// it will go to nextline if it is asycnronous 
// */



// const path = require('path');
// const fs = require('fs');

// function read() {
//     let filePath = path.join(__dirname, 'block.js');
//     let data = fs.readFileSync(filePath, 'utf-8');
//     return data; 
// }
// console.log(read());






const path = require('path');
const fs = require('fs');

function read() {
       fs.readFile("./index.html","utf-8",(err,data) => {
        return data;
    })
//   return 20; 
}

console.log(read());

