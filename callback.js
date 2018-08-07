//What is a Callback?

/*A callback is a function that is to be executed after
another function has finished executing — 
hence the name ‘call back’.*/

/*In JavaScript, functions are objects. Because of this,
functions can take functions as arguments, and can be
returned by other functions. Functions that do this are
called higher-order functions. Any function that is 
passed as an argument is called a callback function.*/

//Why do we need Callbacks?

/*For one very important reason — JavaScript is an event
driven language. This means that instead of waiting for a
response before moving on, JavaScript will keep executing
while listening for other events. Lets look at a basic example:*/

function first(){
    console.log(1);
  }

function second() {
    console.log(2);
}

first();
second();
  //1
  //2

/*But what if function first contains some sort of code 
that can’t be executed immediately? For example, an API
request where we have to send the request then wait for
a response? To simulate this action, were going to use 
setTimeout which is a JavaScript function that calls a 
function after a set amount of time. We’ll delay our
function for 500 milliseconds to simulate an API request.
Our new code will look like this:*/

function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);}, 500 );
  }

  function second(){
    console.log(2);
  }
  first();
  second();

// 2
// 1

//Create a Callback

// a very simple example :

let x = function(){
    console.log("i am called frome inside a function")
};

let y = function(callback){
    console.log('do somthing');
    callback();
}

y(x)

//do somthing
//i am called frome inside a function

// so now why do we need use callback
//let's make an other example 

function calc(num1, num2, calcType){
if (calcType === "add"){
    return num1 + num2;

}else if(calcType === "multiply"){
    return num1 * num2;
}

};

console.log(calc(2,3, 'add'));
//5

// but we can do that beter than this 
// to use this if function always
//so we have to take this out side of the calc function

function add(a,b){
    return a + b
};

function multiply(a,b){
    return a * b
};

function calc(num1,num2,callback){
return callback(num1,num2)
};

console.log(calc(2,3, add));
//5
console.log(calc(2,3, multiply));
//6


// and we can just add any function we need it 
//and just call it at the last 


// this is the power of callback

// what if we want to be sure if the user 
//who using this is relly passing a function
// instad of (callback) in lin 103
// only function no thing else so we can do this

function calc(num1,num2,callback){
    if (typeof callback === "function"){
        return callback(num1,num2)
      }
    };
