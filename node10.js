//1.
/*

    var fs = require('fs');
    var file1 = fs.readFileSync('ReadMe.txt','utf8');
    console.log(file1);

    fs.writeFileSync('writeFile.txt',file1);

*/
//This is entirely based on sync functions bcoz whatever we write after it is gonna be logged out after it onlt.

//2

/*
    var fs = require('fs');
    fs.readFile('ReadMe.txt','utf8',function(err,data){
        // console.log(data);

        fs.writeFile('writeFile.txt',data,function(){
            console.log("Hey, i am done!");
        });
    });
*/
//This is entirely a non blocking code, the other statements will r==un as the prohgram gets thedata fro here.
//One thing that is to be noted here is that, we are gonna use acallback function when we use writeFile.



