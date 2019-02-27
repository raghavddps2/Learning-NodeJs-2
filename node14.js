//In this tutorial we will be basically creating a node Server
var http = require('http'); //This is a node Js module that we are gonna use.
var server = http.createServer(function(req,res){
    console.log('request was made'+req.url);
    //With the above statement evertime we refresh things, we are gonna get the requested URL, in the console.
    res.writeHead(200,{'content-type':'text/plain'});
     ///This basically sets the status code, here for example 200 and the content type as to whatever we want.
     //Now we wanna end it and send to browser.
     res.end('Hey Ninjas, Sup Hows life?'); //Here we are ending that response adn sending it to the browser.
     //Now we have to specify the post as to where it will fall.
}); //This is how we have creates a server.

server.listen(3000,'127.0.0.1'); //Listening to this port on an IP address.
console.log('Yo bro, Now listening to port 3000');
/*
    How this works is whenever we are gonna send a request to the server, this is gonna give a response which we have the
    two parameters as.

    So, basically when we make a resonse to a server, we have the request and the resquest headers.
    and then data and response headers are given in response.
    --------                    Request + Request Headers.                 ------
    |Client|< -----------------------------------------------------------> |Server|
    --------                    Response data + Response headers.          -------

    We have these headers that can basically be understood as extra information about the request and the response,
    its basically the same as the head section of the website. We can put the content type, be it html or Json or plain text

*/


/*
So, basically how we create a server is, 
var http = require('http');
var server = http.createServer(function(req,res){
    req.writeHead(200,{'content-type': 'text/plain'});
    res.end('Hey Ninjas, How's life?');
});

server.listen(3000,'127.0.0.1');
console.log('Up and Running');



*/


