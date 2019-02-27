/*

In this section, we are gonna deal with buffers. So, before going furthur, we should know as too what the hell are buffers.
So, basically Buffersa are:
    1. Temporary storage spot for a chunk of data taht is being transferred from one place to another.
    2. The buffer is filled with data, and then passed along.
    3. Transfer small chunks of data at a time.
So, now comes as to what basically are streams:
    1. Streams are basically stream of data that flows overtime from one particular place to another, when the buffer is full,
    it passes that chunk of data down the stream to the client.
    So, the advantage of streams and buffer is that we don't have to consume all of the data, we can do that bit by bit.
    Basically, using streams increases the performance.

    Now, Moving furthur we will be looking for streams much in detail.
    Some basically we have readable, writable and duplex streams.
    
    So,first basically, we are gonna see writable streams, when we are writing data to the server, and if node was
    receiving data from somewhere, we are gonna talk about readable streams, and duplex streams can do both of that pretty well.


    
*/

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readMe.txt');
myReadStream.on('data',function(chunk){
    console.log("New Chunk Received: "+chunk);
})
