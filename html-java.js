//this working with console 

window.document

//#document

// this to select all webpage and to show 
//us html file code
// we don't have to write every time 
//window only one time and after that 
//it is autmaticly every entery will
//be in window 


//this to select the title from html file 
document.title


//this to chang the title
document.title = "if we want to change the title"


// if we have <p> in html file and this <p>
//have id = text and we want to select this id
document.getElementById("text")

//by this entry you will acces this <p> and change it
document.getElementById("text").innerHTML = "what do you want"

// what if we want to change this many times
//but in short way 
var myTitle = document.getElementById("text")
myTitle.innerHTML = "what do you want"

//to select class not id 
document.getElementsByClassName("class name")


//to select <ul> in html from java script
//and this ul have id "menu"
var menuItem = document.getElementById("menu").
getElementsByTagName("li");

//by this entry up we have array and the 
//values is li in ul 
//so to change li frome this ul we have 
//to select his array number 
menuItem[0].innerHTML = "what do you want"
menuItem[1].innerHTML = "what do you want"

// we can do that with for loop
for (i = 0; i < menuItem.length; i++){
    menuItem[i].innerHTML = "hello";
}