//Classical Inheritance 
// function to be able to inherit, to allow FRIEND object to inherit all of Person properties and functions.
function inherits=function( ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};


//MASTER MODEL THAT WILL CREATE ALL OTHER OBJECTS
var Person = function(name) {
    this.name = name;
    
}

//ADD SOME FUNCTIONALITY TO PERSON
Person.prototype.sayName = function() {
    console.log("Hi my name is "+this.name);
}

Person.prototype.shoutName = function() {
    console.log("Hi my name is " + this.name + "!")
}
//created a Person object using the variable name 'john'
var john = new Person("John");

// object will use perform the Person function sayName which was declared using .prototype.
john.sayName();

//Now to add inheritance to create a specific type of person, and have the ability to create multiple types of that person

//We create a new object called Friend, which is a module not an instance
var Friend = function(name){
    //We want to inherit properties from Person constructor than setting new ones in Friend
    //Person.call(this, name);
    Friend.super_.call(this.name);
    
}


//Now we need some sort of inheritance function to be added to the js file, which is normally placed at top of js file so look at begining of code!


//this code allows Friend to inherit all of Person's constructor
inherits(Friend, Person);

//test for inheritance
var julia = new Friend("Julia");
julia.sayName();

//Now lets create a new Object that will inherit from Person

var Musician = function(name, instrument) {
    Musician.super_.call(this.name);
    this.instrument = instrument;
}
//Allow the musician object to display the instrument they play
Musician.prototype.getInstrument = function {
    console.log("I play the " + this.instrument);
}

var alex = new Musician("Alex", "Guitar");
alex.sayName();

Musician.prototype.shoutName = function() {
    console.log("Hi!! My name is " + this.name + " and I am a Musician!!!!!");
}

alex.getInstrument();
alex.shoutName();


//Now we are going to test the inheritance for the code written!
//WE WILL DELETE THE SHOUTNAME FUNCTION IN MUSICIAN OBJECT AND SEE IF IT WILL INHERIT FROM PERSON...
delete Musician.prototype.shoutName

alex.shoutName();
