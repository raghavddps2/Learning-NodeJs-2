/*
    In this video we will create a writeable stream.
    


*/

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt','utf8');
myReadStream.on('data',function(chunk){
    console.log("New chunk arrived: ");
    myWriteStream.write(chunk);
})
//We did the same using writeFile and readFile, nbut the difference is we are diving into pieces of chunk, so this is the benefi
//reading data like that.

//next to do the same, we have something called as files, 

//Everytime we receive a chunk of data, we will write it to the writeStream.
