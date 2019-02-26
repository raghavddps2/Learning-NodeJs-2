//In this tutorial we are gonna create and remove directories.
var fs = require('fs');
//In nodeJs we also have a method in the fs module to delete the file we wanna delete.That method is basically called as unlink.

//How we basically do that is we use the unlink function
fs.unlink('ReadMe.txt',function(){
});
fs.unlink('writeFile.txt',function(){
});

//This is to be noted that when we have the eror as ERR_INVALID_CALLBACK, we should provide a callback function to the function we have been
//given.


/*Now in this section, we are basically gonna learn, as to how do we create a directory, how we create a directory is basically,
    the mkdir function.
*/
fs.mkdirSync('Raghav'); //this will simply craete a directory that we want to be created/ This is something crazy.
fs.rmdirSync('Raghav');
//Now to delete a directory, we basically use rmdir, which stands for remmovedirectory.
//The above version is basically using the  Sync functions. Now we are gonna do that using the Async functions.

fs.mkdir('Raghav',function(){
    console.log("Directory Created");
})
fs.rmdir('Raghav',function(){
    console.log("Directory Deleted");
})