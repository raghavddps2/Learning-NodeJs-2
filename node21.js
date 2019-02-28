var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    console.log('Requested url is'+req.url);
    res.writeHead(200,{'content-type': 'application/json'})
    var myObj = {people: [{
        name: 'Ryu',
        job: 'Programmer',
        age: 29
    },{
        name: 'Ryu',
        job: 'Programmer',
        age: 29
    },{
        name: 'Ryu',
        job: 'Programmer',
        age: 29
    }]      
    }
    res.end(JSON.stringify(myObj));
})

console.log('Server running at port 3000');
server.listen(3000,'127.0.0.1');
