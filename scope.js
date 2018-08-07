const message = "hi";
console.log(message);
//hi

// what if we add this message inside carly bracels{}

{
 const message = "hi";
}

console.log(message);
//Uncaught ReferenceError: message is not defined
// that because this varible is limited in side this block
//that mean this message is acceseble in side this black
//but not out side this block 

// so why acctuly we need this block will this block can 
//be apart of function like this 

function start(){
    const message = "hi";

}

console.log(message);

//but also by this console log we have the same error 
//because we have this varible only in side this function

//it is same when we declare avarible in if block 

function start(){
    const message = "hi";

if (true){
    const another = "bye"
}

}

// so the another varible only availble in side if block


function start(){
    const message = "hi";

if (true){
    const another = "bye"
}
console.log(another);
}

start();

// in this case we have error because the console log 
//out side the if block witch another varible decler


// also we have this in loop 


function start(){
    const message = "hi";

if (true){
    const another = "bye"
}

for (let i = 0; i < 4; i++){
    console.log(i);
}

// this i varible is in side for loop block so it will work 
// becuse the console log also in it 
console.log(another);
}

start();

//0 1 2 3

// also we can have an other function like this 

function start(){
    const message = "hi";
}

function stop(){
    const message = "bye";
}

// this is aperfect javascript work because each function
//have avarible valid only is side it 

// but wat if we declar a varible out side the function
// with out any code blocks {}
const color = "red";
//this is a global scope so we can put it in side below 
//function and it will work 

function start(){
    const message = "hi";
    console.log(color);
}

function stop(){
    const message = "bye";
}

start();
//red

// but wat if declar ane varible inside the function
//with same name but defrent value like this

const color = "red";
function start(){
    const message = "hi";
    const color = "blue"
    console.log(color);
}

function stop(){
    const message = "bye";
}

start();

// the result will be blue 
// so locale varibles in side the fanction have a priority 
// than global varibles 

// in general you should avoid declar globale varibles 
//becase the will be any where accesbly and that is bad for programing
