
//creat an Array

var multipleValues = [50, "hello", true];

var myString = "this is nothing"
console.log( myString.lenght );
//14
// we know this before 
// but we can use it also for arrays

var myArray = [10, 20, "test", true];
console.log( myArray.length );
//4
//highest index is[3]


var myArray = [10, "a", 1, true, 50];
myArray.reverse();
//(5) [50, true, 1, "a", 10]

myArray.sort();
//(5) [1, 10, 50, "a", true]

myArray.join();
//"1,10,50,a,true"

var lastElement = myArray.pop();
console.log(lastElement);
//true

console.log(myArray);
//(4) [1, 10, 50, "a"]

myArray.push(true);
console.log(myArray);
//(5) [1, 10, 50, "a", true]

myArray = [10, 20, "test", true, 99];
while ( i < myArray.length){
    console.log("the value is:"+ myArray[i]);
    i++
}

 //the value is:10
 //the value is:20
 //the value is:test
 //the value is:true
 //the value is:99
 //4

 var myArray = [500,500,500,500,500];

 var total = 0;

 for ( i = 0 ; i < myArray.length ; i++){
     //add the current element to the total
     total = total + myArray[i];
 }
 //2500

 