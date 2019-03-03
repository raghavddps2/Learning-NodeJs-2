/*
    Until now we were just using express sending strings using res.send() // and so on...now we are gonna look as to how we
    can send HTML pages for the same.



*/

var express = require('express');
var app = express();

app.get('/',function(req,res){
    // res.send('This is the home page');
    res.sendFile(__dirname+'/index.html');
})

app.get('/contact',function(req,res){
    //res.send('This is the contact page');
    res.sendFile(__dirname+'/contact.html');
})

app.listen(3000);