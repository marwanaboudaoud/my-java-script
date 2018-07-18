//while loop

let a = 1;

while (a < 10) {
    console.log(a);
}


//in this case this loop will be infinite loop 
//because we will stack in this loop for ever
// or to switch offf our pc because it will still
// looping in side this loop and every time it will 
// be a < 1 (true)

let a = 1;

while (a < 10) {
    console.log(a);
    a++
}

// in this case we will jump out the loop when
//a > 10 becuase every loop 1 will added to a 
//until a come more than 10 and it will be false


let amount = 0;

let i = 1;

while ( i <= 10 ) {
    amount = amount + 100;
    i++
}
// 10

console.log("the value is: " + amount);
//the value is: 1000




//for loop

for ( var i = 1 ; i <10 ; i++){
    // some stuff
    //some stuff
}

// do ... while loop 

var a = 1;

do {
    // your code
    a++;
} while ( a < 10);




