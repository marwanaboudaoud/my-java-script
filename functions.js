//Functions are one of the fundamental building blocks in JavaScript.
// A function is a JavaScript procedure—a set of 
//statements that performs a task or calculates a value.
// To use a function, you must define it somewhere in
// the scope from which you wish to call it.


function myFunction() {
    var h = 5;
    var i = 10;
    var j = 20;
    let s = h + i + j;
    console.log("the value of d is : " + s);
}

myFunction();

//the value of d is : 35

//other way for function with arguments

function addtwonumber(h,i){
    let result = h + i; 
        return result;
     }

addtwonumber(50,100);

//150

addtwonumber(90,180);

//270

var x = addtwonumber(5,10);
console.log(x);

//15


// note : when we create a varible in side the
// function it's only availble in side this function
// like this 

function simplefunction() {
    //lots of code 
    let x = 500;  // local varible
    //lots of code
    console.log(x);   //500
}

console.log(x); //undefined

// so to solve this problem we can create 
//the varible out side the function
//like this

let x;
function simplefunction() {
    //lots of code 
    x = 500; 
    //lots of code
    console.log(x);   //500
}

console.log(x); //500


