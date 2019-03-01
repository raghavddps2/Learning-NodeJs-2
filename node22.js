var fs = require('fs');
var http = require('http');
var jsonData = require('./sample.json');

var server = http.createServer(function(req,res){
    console.log('Requested url is '+req.url);
    res.writeHead(200,{'content-type': 'application/json'});

    // var myDataObj = { people:[
    //     {
    //         name: 'Raghav',
    //         age: 23,
    //         course: 'Btech'
    //     },{
    //         name: 'Rohit',
    //         age: 34,
    //         course: 'Btech'
    //     },{
    //         name: 'Pawan',
    //         age: 43,
    //         course: 'Btech'
    //     }
    // ]
    // }
    var myDataObj = jsonData;

    res.end(JSON.stringify(myDataObj.message));
});

console.log('Server runnning at port 3000');
server.listen(3000,'127.0.0.1');
