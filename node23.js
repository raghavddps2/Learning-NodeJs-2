//In this video we are gonna learn about some basic routing in NodeJs.
/*
var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req,res){
    console.log('Requested URL is '+req.url);
    res.writeHead(200,{'content-type':'text/plain'});

    res.end('Feed me Popcorn');
})
console.log('Server started at 3000');
server.listen(3000,'127.0.0.1');
*/

/*
    As of now, what we are doing is, we request any urll, we get the same output, //#endregionbut obviously, we want different routes to render different things.
    So, routes help us do so.

*/

var fs = require('fs');
var http = require('http');


var server = http.createServer(function(req,res){
    console.log('Requested URL is '+req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname+'./index.html').pipe(res);
    }
})
console.log('Server started at 3000');
server.listen(3000,'127.0.0.1');
