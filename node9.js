var fs = require('fs');
fs.readFile('ReadMe.txt','utf8',function(err,data){
    // if(err){
    //     console.log("Some error occured readiing the file");
    // }
    // else{
    //     console.log(data);
    //     // fs.writeFile('writeMe.txt',data);
    // }
    fs.writeFile('writeMe1.txt',data);
    // var file1 = fs.readFileSync('writeMe.txt','utf8');   
});


console.log('test');
console.log('test1');

console.log('test');
console.log('test1');
console.log('test');
console.log('test1');
console.log('test');
console.log('test1');


///Here, the first parameter is the error if comes any and the other is the data that is read.
//It si sdoing the same thing. The benefit about this is that we aree not blocking the code.
// Here, if i write some log statements below, then some will be executed before and then the file contentes will be loged..