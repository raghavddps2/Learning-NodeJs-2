var events = require('events');
/*
    events is basically a built in module in node.
    As this is built in node, node will recognize that node will go out and will fetch that for us.
    whatevr is returened in module.exports of events is there in our local events now.

*/
var myEmitter = new events.EventEmitter();
/*
    Now, one of the things that is given is the eventEmitter, and we can use the event emitter in node js to react to custom 
    events and react to those events when they are e mitted
    

*/
myEmitter.on('someEvent',function(msg){
    console.log(msg);
});
/*
    This is a kind of an event listener that fres a callback function when a particular button is clicked.
    element.on('click',function(){

    });
*/

myEmitter.emit('someEvent','the event was emitted');
/*
    The above statement is used to emit the whatever event we wanna emit
    when the event is trigerred, the statement given is passed as a parameter to the function,
    and it is logged as given.
*/
