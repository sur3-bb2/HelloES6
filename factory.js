/**
 * Created by z002j8f on 11/17/16.
 */

function Car( options ) {

    // some defaults
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";

}

// A constructor for defining new trucks
function Truck( options){
    this.doors = options.doors || 10;
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
}

function VehicleFactory() {};

VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function (options) {
    if( options.vehicleType === "car" ){
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }

    return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle( {
    vehicleType: "car",
    color: "yellow",
    doors: 5 } );

var truck = carFactory.createVehicle( {
    vehicleType: "truck",
    color: "blue",
    doors: 8 } );

console.log( car instanceof Car );
console.log(car);
console.log( truck instanceof Truck );
console.log(truck);

function TruckFactory() {}

TruckFactory.prototype = Object.create(VehicleFactory.prototype);
TruckFactory.vehicleClass = "truck";

var truck2 = new TruckFactory().createVehicle({
    color: "green",
    doors: 16 });

console.log(truck2 instanceof Truck);
console.log(truck2);


/******
 * Subclassing

 Way to inherit functionalities from other objects.
 */
var Person =  function( firstName , lastName ){
    this.firstName = firstName;
    this.lastName =  lastName;
    this.gender = "male";
};

/******
 * Superhero is Person + something

  using call
 */
var Superhero = function( firstName, lastName , powers ){
    // Invoke the superclass constructor on the new object
    // then use .call() to invoke the constructor as a method of
    // the object to be initialized.
    Person.call( this, firstName, lastName );

    // Finally, store their powers, a new array of traits not found in a normal "Person"
    this.powers = powers;
};

Superhero.prototype = Object.create(Person.prototype);
var superman = new Superhero( "Clark" ,"Kent" , ["flight","heat-vision"] );
console.log( superman );
