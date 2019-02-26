var fs = require('fs'); //This is a kind of a convention that we set the module name equal to the variable name.
//This module can do a lot of different things and in this modules we are gonna focus on reading and writing files.
///To do the same what we have to do first is to create a readme file or basically a text file from wheich we are gonna read the data.

// fs.readFileSync()     //readFileSync() is th emethod we generally use to basically read a file in nodeJs.

    /*
        1. Read Sync file basically means that we are gonna read the file and then any code after taht will be executed.
        2. This is the reason that we call this as the sync finction. This is blocking code, bole toh, we are blocking the code after this,



    */

    var readMe = fs.readFileSync('readMe.txt','utf8');
    console.log(readMe);


    console.log('test');
console.log('test1');

console.log('test');
console.log('test1');
console.log('test');
console.log('test1');
console.log('test');

    //Now we are gonna write the same file to another file name.

    // fs.writeFileSync('writeMe1.pdf',readMe); //Second parameter is the data we wanna pass into.

    //Here one of the important thing here is the encoding of the data, bcz at last all of it is just 0's and 1's.
    //Read file sync is used to read the file and writeFileSync is used to write to the file.

    //This was the sync version of the same. To use Async version, we have a differrent approach. Which is covered in the next file.
    //Here again one thing that is to be noted is that, we are basically, using sync function, so first the function exectues and then the log statements.
    