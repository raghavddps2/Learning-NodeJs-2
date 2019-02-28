var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made '+req.url);
    res.writeHead(200,{'content-type':'html'});
    var myReadStream = fs.createReadStream(__dirname+'/ReadMe.txt','utf8');
    myReadStream.pipe(res);
})

server.listen(3000,'127.0.0.1');
console.log('server started at port 3000');