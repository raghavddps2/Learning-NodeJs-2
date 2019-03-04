
var express = require('express');
var app = express();

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index');

});

app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/prolific/:userName',function(req,res){
    var data = {age: 29,hobbies:['fishing','dancing','singing'],profession: 'Software Engineer'}
    res.render('prolific',{userName: req.params.userName,data: data});
})

app.listen(3000);