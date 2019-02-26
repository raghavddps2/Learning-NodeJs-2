console.log("Hello Wolrd!");
//This is simply how we write to the console using node.
// setTimeout(function(){
//     console.log("3 seconds have passed");
// },3000);
var count = 0;
 var timer = setInterval(function(){
    count += 2;
    console.log(count+" seconds have passed");
    if(count >5){
        clearInterval(timer);
    }
},2000);
//This also shows as to how a function expressiion is written. This clears all our doubts.
//This will write everything to the console after every 2 seconds.