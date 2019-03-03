/*

    In this tutorial, we are gonna have a quick intorduction to express in nodeJS.
    Advantages of using Express.
        -- So, it has basically an easy and flexible routing system.
        -- It easily integrates with many templating engines. (This is a nice advantage as it is easy to link frontend with our appplications.)
        -- It contains a middleware framework


    





*/

var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('This is the homepage for raghav\'s website!');
});
app.get('/contact',function(req,res){
    res.send('This is the contact Page');
})
app.listen(3000);
/*

    So, basically we have four different HTTP Methods, they are basically.
        -- GET app.get('route',fn);
        -- POST app.post('route',fn);
        -- DELETE app.delete('route',fn);
        -- PUT

        All of these are same requests, just each has different kinds of information attached to it, to be sent to the server.

*/