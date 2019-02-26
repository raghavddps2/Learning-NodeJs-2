//Here we are gonna talk about modules and require. We split our code into logical modules.
// var counter = require('./node4.1'); //#endwhat we want, and stores it in variable counter;region.
// console.log(counter(['Raghav','Brad','Rohit','Anirudh'])); //#endregion//Initially we gert the error, bcoz the node4.1.js is not available outside the module.
// //So, we have to define explicitly what modules we want outside of the node4.1.js


// var adder = require('./node4.1');
// console.log(adder(5,6));

// Now we will store node4.1.js in a varibale called stuff, that will have everything.
// We will do something like this to get different files.

var stuff = require('./concept');
console.log(stuff.counter(['Raghav','Shivani','Shraddha']));
console.log(stuff.adder(3,5));
console.log(stuff.pi);
