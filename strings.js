
var foo = 5;
var bar = 5;

console.log(foo + bar);//10

// in this case (numbers) it will be addition

var foo = "5";
var bar = "5";

console.log(foo + bar);//55

// in this case (string) it will be concatenation
// it just will put two strings next to each other

var foo = 5;
var bar = "5";

console.log(foo + bar);// 55- but one is a string

var foo = 5;
var bar = "b";

console.log(foo + bar);// NaN

// that is mean not anumber 

var bar = "5";
let mynumber = Number(bar);
console.log(bar);
//5

//this to change the value (number in string)
//to a number and it will not work if the value
//in string not a number


var marwan = "this is my name";
console.log( marwan.length );
//15

// this give us in this varible hoe many characters long
//and of course it will begine from 0


//string methods

// we can say that is mean a function but it's valid
// only for the varible we name it

var marwan = "this is my name";
console.log( marwan.toUpperCase());
//THIS IS MY NAME

//it will change string letter to uppercase letter

var str1 = "Hello";
var str2 = "hello";
str1 == str2;
//false

// they are not equal because first varible with (h)
//and second varible with(h)

if (str1.toLowerCase() == str2.toLowerCase()){
    console.log("yes, equal");
}
//yes, equal

// this to tell that just i don't care if it is
//uppercase or lowercase i need to know is the
//letters is same if it is tell me yes , equal

var position = marwan.indexOf("my");
console.log(position);
//8

//this to tell ypu the word wich you choose it
//exactly from where it will start 

var position2 = marwan.indexOf("ddd");
console.log(position2);
//-1

// if we choose word don't excist in my string
// the result will be -1 

if ( marwan.indexOf("ddd") == -1){
    console.log("that word does not occur.")
}

//that word does not occur.
// this to make a condetion that if this word equal
//to -1 tell me that word does not occur


var segment = marwan.slice(11,15);
var segment = marwan.substr(11,15);
var segment = marwan.substring(11,15);
console.log(segment);
//name

// this to take apart of the string wich it bigan from
//11 and end on 15 and it is (name)word

//note : we start acount from 0 like this
//this is my name
//0123456789


var str1 = "aardvark";
var str2 = "beluga";
str1 < str2;// true

// because (a) letter is smaller than (b) letter
// and str1 begine with a and str2 begine withh b

var str1 = "aardvark";
var str2 = "Beluga";
str1 < str2;//false

//because ABCD.... less than abcd...

// what if we want to know the format og the string 
// which mean is it email adress or other things

// create regular expressions
var myRE = /hello/;
console.log(myRE);
///hello/

myRE = new RegExp("hello");
// this is same the one before but longer way


var mystring = "dose this sentence have the word hello in it?"; 
if ( myRE.test(mystring) ){console.log("yes");}

//yes

//creating patterns

var myRE = /^hello/; // hello has to be at the start
var myRE = /hello$/; // hello has to be at the end
var myRE = /hel+o/;  //(L)has to be once or more
                     //"helo","hello","helllllo"
var myRE = /hel*o/;  //(L) has to be zero or more
                     //"heo","helo","hellllo"
var myRE = /hel?o/;  //(L)has to be zero or one 
                     //"heo","helo"
    /hello|goodbye/; // either hello or goodbye
    