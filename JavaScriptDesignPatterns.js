//JavaScript doesn't support the concept of classes but it does
//support special constructor functions that work with objects.
//By simply prefixing a call to a constructor function with the
//keyword "new", we can tell JavaScript we would like the
//function to behave like a constructor and instantiate a new
//object with the members defined by that function.

//Inside a constructor, the keyword this references the new 
//object that's being created. Revisiting object creation,
//a basic constructor may look as follows:

function Car( model, year, miles ) {
 
    this.model = model;
    this.year = year;
    this.miles = miles;
   
    this.toString = function () {
      return this.model + " has done " + this.miles + " miles";
    };
  }


// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
console.log( civic.toString() );
//Honda Civic has done 20000 miles

var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
console.log( mondeo.toString() );
//Ford Mondeo has done 5000 miles

//Functions, like almost all objects in JavaScript, contain
//a "prototype" object. When we call a JavaScript constructor
//to create an object, all the properties of the constructor's
//prototype are then made available to the new object. 
//In this fashion, multiple Car objects can be created which
//access the same prototype. We can thus extend the
//original example as follows:

function Car( model, year, miles ) {

    this.model = model;
    this.year = year;
    this.miles = miles;
  }
  // Note here that we are using Object.prototype.newMethod rather than
  // Object.prototype so as to avoid redefining the prototype object
  Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
   
  // Usage:
  var civic = new Car( "Honda Civic", 2009, 20000 );
  console.log( civic.toString() );
  //Honda Civic has done 20000 miles
  
  var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
  console.log( mondeo.toString() );
  //Ford Mondeo has done 5000 miles

  