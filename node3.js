//Here, we are gonna talk about function expressions.


//Normal function expression.
function sayHi(){
    console.log("SayHi");
}

sayHi();
//We invoke this function here like that.

//On the other hand we have a function expression smething like this.
var sayBye = function(){
    console.log("Bye");
}
//Here, we have an anonymous function

//Now we can invoke this using the variable with parenthesis after it.
sayBye();

//Another example
function callFunction(fun){
    fun();
}

callFunction(sayBye);

//What we are basically doing here is passing a variable as a parameter that will act as a function. This is important and should be noted.
