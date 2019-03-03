/*
    Until now we were just using express sending strings using res.send() // and so on...now we are gonna look as to how we
    can send HTML pages for the same.


    //Now we will see what we want to see from like some years as to how we can display dynamic content, like from a database.
    //This is done using something called as Templating engines. We can inject the dynamic content using a templating
    // engine called as ejs(Embedded javascript)
    ejs is basically a light weight templating engine for the same and we can learn more about ejs on embeddedjs.com

    npm install ejs //Now we can use ejs in our application.
*/

var express = require('express');
var app = express();

app.set('view engine','ejs') //using this we are basically setting the view engine as ejs 
//By default, it stores everything when we look for some templates it llok in views folder.

app.get('/',function(req,res){
    // res.send('This is the home page');
    res.sendFile(__dirname+'/index.html');
})

app.get('/contact',function(req,res){
    //res.send('This is the contact page');
    res.sendFile(__dirname+'/contact.html');
})

app.get('/profile/:userName',function(req,res){
    // res.send('The id of your profile you requested is: '+req.params.id);
    //To do that in ejs we use something called as res.render()
    var data = {age: 29, job: 'ninja'};
    res.render('profile',{userName: req.params.userName, data: data}); //This will by default look into a folder called as views.
})

app.listen(3000);