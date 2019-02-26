var welcomeMsg = function(){
    // var name = prompt("What is your name?");
    var name = "Raghav";
    console.log("Your name is "+name);
}

var welcomeMsg1 = function(){
    // var age = prompt("What is your age?");
    var age1 = 10;
    console.log("Your age is "+age1);
}

// module.exports.welcomeMsg = welcomeMsg;
// module.exports.welcomeMsg1 = welcomeMsg1;


//Doing this all of it was pretty fine, but there is something better that we could have done.
//This is as follows.
    /*
        1. We could instead of using the variables, set the variables as modules.exports.counter or anything like that property directly.
        2. The example for ths same is given below and is commented.



    */

// module.exports.welcomeMsg = function(){
//     // var name = prompt("What is your name?");
//     var name = "Raghav";
//     console.log("Your name is "+name);
// }

// module.exports.welcomeMsg1 = function(){
//     // var age = prompt("What is your age?");
//     var age1 = 10;
//     console.log("Your age is "+age1);
// }


/*
        1. The third and the next way to achieve the same is by puting an object in module.exports
            with the proper key value pairs.
*/

module.exports = {
    welcomeMsg: welcomeMsg,
    welcomeMsg1: welcomeMsg1
}