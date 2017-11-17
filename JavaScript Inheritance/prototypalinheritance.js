//PROTOTYPAL INHERITANCE
//We can just make an Object with no constructor for previous
/*var human = {
    species: "human",
    //make a create function so we do not need to do ali.name = or ali.instrument = 
    create: function(name) {
        var instance = Object.create(this);
        instance.name = name;
        return instance;
    },
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
    console.log(this.name);
    }
    
};*/

// NOW WE WILL CREATE THE HUMAN OBJECT USING 'keys'
var human = {
    species: "human",
    //make a create function so we do not need to do ali.name = or ali.instrument = 
    create: function(values) {
        var instance = Object.create(this);
        Object.keys(values).forEach(function(key){
            instance[key] = values[key];
        });
    },
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
    console.log(this.name);
    }
    
};
//MAKE A MUSICIAN OBJECT FROM HUMAN OBJECT
/*var musician = Object.create(human);

musician.playInstrument = function() {
    console.log("plays..." + this.instrument);
}*/

/*var ali = Object.create(musician);
ali.name = "Ali";
ali.instrument = "Drums";*/

//FOR KEYS OBJECT, WE WILL NOW CREATE musician OBJECT FROM HUMAN OBJECT
var musician = human.create({
   species: "musician",
    playInstrument: function() {
        console.log("Plays... " + this.instrument);
    }
});


// NOW WE WILL USE MUSICIAN OBJECT TO CREATE A INDIVIDUAL FROM IT
var ali = musician.create({name: "Ali", instrument: "Guitar"});

ali.playInstrument();

//ACCESSING THE HUMAN OBJECT FUNCTIONS
ali.sayName();
ali.saySpecies();

