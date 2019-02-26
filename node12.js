var fs = require('fs');
fs.mkdir('Raghav',function(){
    fs.readFile('ReadMe.txt','utf8',function(err,data){
        fs.writeFile('./Raghav/WriteMe.txt',data,function(){
            console.log("Written the file inside the directory");
        });
    })
    
})

//Now here to delete a file, we have something like this, which can be done as follows.
var fs = require('fs');
fs.unlink('./Raghav/writeMe.txt',function(){
    fs.rmdir('Raghav',function(){
        console.log('First deleted the file and then the directory');
    })
});
/*
    So, basically in the fs module we have fileRead, fileWrite, readFile ,writeFile, we can directly remove a directory only if 
    the directory is empty. This is indeed great.

    This was all for Day 1, i will catch you in the next week.

*/