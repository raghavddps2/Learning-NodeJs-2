var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Request was made '+req.url);
    res.writeHead(200,{'content-type':'html'});
    var myReadStream = fs.createReadStream(__dirname+'/ReadMe.txt','utf8'); //Yahan pe aatta hai ejs ka concept!
    myReadStream.pipe(res); //Works kind of same as stream, but kinda automates the task, no need of saying that the event will come.
    
});

server.listen(3000,'127.0.0.1');
console.log('Server started at port 3000');