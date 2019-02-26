var counter = function(arr){
    return "There are "+ arr.length + " elements in the array";
}

var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
}

var pi = 3.142;

// console.log(adder(2,3));

//Now we will see how we are gonna export multiple functions
module.exports.counter = counter;
module.exports.adder = adder; //All three of these will be available now.
module.exports.pi = pi;
// console.log(counter(['Raghav','Brad','Rohit','Anirudh']));

//Now if we wanna use the above written functionality in app.js