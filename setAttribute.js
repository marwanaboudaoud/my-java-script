/*This method is used to add a specified attribute to an 
element, giving the attribute a certain value.

If the attribute already is assigned to an element, 
the value is simply overwritten.

Note: It is not advised to use this attribute for styling.
To change or add styles, you can access the Style object, 
which will effectively change the style, while the CSS
stylesheet may override the style set by the HTML */


//this in body in html

<input type="text" id="myinput" value="sample" />

/* so we can change (sample) text in java script
by using setAttribute how we can do this 
so we write this in java script file*/ 

document.getElementById('myinput').setAttribute('value','water');

/* so what is happend here is we change the value 
from sample to water */

// now we going to creat html element using java script 


const myElement = document.createElement('div');

myElement.setAttribute('class', 'dcode');

console.log(myElement);
//<div class="dcode"></dive>

/*now we going to use appendchild method to add this div 
to the screen then use css to target this class and dicorat*/

const myElement = document.createElement('div');

myElement.setAttribute('class', 'dcode');

document.body.appendChild(myElement);

console.log(myElement);

//this in sidy css file 

/*.dcode {
  width:
  hight:
  background:
}*/
