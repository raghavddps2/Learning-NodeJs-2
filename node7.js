// /*
//     For this example we are gonna use a very nice module in node js that is basically, called as the util short for utilities. ()
// */
// var events = require('events');
// var util = require('util');
// var person = function(name){
//     this.name = name;
// }
// util.inherits(person,events.EventEmitter);
// var james = new person('james');
// var ryu = new person('ryu');
// var shivani = person('shivani');

// var people = ["james","ryu","shivani"];

// people.forEach(function(person){
//     person.on('speak',function(msg){
//         console.log(person.name+'said: '+msg);
//     });
// });

// james.emit('speak',"Hey dude, wassup?");




var events = require('events');
var util = require('util');

//Util Module allowsus to inherit several things in objects built in nodeJs

var Person = function(name){
    this.name = name;
}
//This creates a new object constructor.
//Now we have to inherit the event emitter so that we can attach custom events to people.

util.inherits(Person,events.EventEmitter); //We want the person to inherit events.EventEmitter. Bcoz we are gonna do so on the events.

var raghav = new Person("Raghav");
var shivani = new Person("shivani");
var shraddha = new Person("Shraddha");

var arr =  [raghav,shivani,shraddha]

arr.forEach(function(person){
    person.on('speak',function(msg){ //Here callback function takes a message.
        console.log(person.name + " said: "+msg);
    })
})

raghav.emit('speak','Hey dude whats up?'); //Here we basically emit what we wrote.
shivani.emit('speak','I am fine. What about you?');
shraddha.emit('speak','Hey dude whats up?');
