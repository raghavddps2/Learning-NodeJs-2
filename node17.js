//Here, i am gonna again create a read stream and writeStream and we are gonna read the data for the same.

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/ReadMe.txt','utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/WriteFile1.txt','utf8');

// myReadStream.on('data',function(chunk){
//     console.log('New Chunk Arrived:\t');
//     myWriteStream.write(chunk); //We manually write it.
// })
//This art of reading data from he readStream and then writing data to the writeStream is quite common in NodeJs.
//Now we are gonna look at a better way to achieve the sam eusing something called as pipes in NodeJS. 

/*
    Now, we have something called as Pipes, We take data from the readStream and then write it to our writeStream.
    //So, using Pipes in nodeJs, we don't have to actually listen for events, pipes do that actually automatically.
*/

myReadStream.pipe(myWriteStream);    //From a readable stream to a writeable stream
//This is actually pretty cool!!
//Now what we will do is we will send this entire thing to the server.