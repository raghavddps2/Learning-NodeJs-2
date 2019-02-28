//Now we will be sending an html file to the server.

var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    console.log('Requested at url'+req.url);
    res.writeHead(200,{'content-type':'html'});
    var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(res);
})

console.log('Server started at prot 3000');
server.listen(3000,'127.0.0.1');

//In this we haven't done anything different, the only thing that we ahve done is created an HTML file and sent it to the server.

