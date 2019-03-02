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
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    //Here, by just providing this if you try something else, it is just gonna rotate same like that.
    else if(req.url === '/contact'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }
    else if(req.url  === '/api/ninjas'){
        var ninjas = [{
            name: 'Ryu',
            age: 30,
            course: 'B.E.'
        },{
            name: 'Cran',
            age: 20,
            course: 'B.E.'
        },{
            name: 'SuperCrazy',
            age: 10,
            course: 'B.E.'
        }]
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
    
})
console.log('Server started at 3000');
server.listen(3000,'127.0.0.1');

//This is how we create routes.Furthur we are gonna look for routing, which is gonna make this so simpler comparatively.