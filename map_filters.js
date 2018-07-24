
// make avarible with array valeus

let numbers = [1, 2, 3];

//make anew varible with .map

let newNumbers1 = numbers.map(numbers => numbers * 2)
//[2, 4, 6]

//make a new varible with .filter
let newNumbers = numbers.filter(number => number % 2 );
console.log(newNumbers);
//(2) [1, 3]