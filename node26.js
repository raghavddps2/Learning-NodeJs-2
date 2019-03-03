/*
    Here, in this lesson, we are gonna talk about the route parameters in express..
    So, route paramters are generally used when we talk about dynamic routes.

    So, we might have an id of the progile of the person and the username of thr person.
    We basically access what we send using the parameters as 'id' req.params.id

*/

var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('This is the homepage for my website!');
})

app.get('/contact',function(req,res){
    res.send('This is the contact page of my website!');
})

// So, /:param is the syntax to do so.
app.get('/profile/:id/:userName',function(req,res){
    res.send('You requested to see the profile with the id of '+req.params.id+' and with the username as :'+req.params.userName); 
})
app.listen(3000);