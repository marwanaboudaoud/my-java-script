/*The Node.appendChild() method adds a node to the end of
the list of children of a specified parent node. If the 
given child is a reference to an existing node in the 
document, appendChild() moves it from its current position
to the new position (there is no requirement to remove 
the node from its parent node before appending it to 
some other node).

This means that a node can't be in two points of the
document simultaneously. So if the node already has
a parent, the node is first removed, then appended
at the new position. The Node.cloneNode() can be
used to make a copy of the node before appending 
it under the new parent. Note that the copies made
with cloneNode will not be automatically kept in sync.

If the given child is a DocumentFragment, the entire
contents of the DocumentFragment are moved into the
child list of the specified parent node.*/

//example;
//this in htmls file :

<ul id="mylist">
<li>apple</li>
</ul>

//this in java script file :

const mylist = document.getElementById("mylist");


//so now we need to creat li with java script 

let newListItem = document.createElement('li');
newListItem.textContent = 'banana';

//no we need to add banana (li) wich it's ready to the 
//(ul) in html and here we use appendChils method 

mylist.appendChild(newListItem);
// so now we have in our list apple and banana

/* now we going to make an array of fruit and append
this fruit to our list */

const mylist = document.getElementById("mylist");
const fruitlist = ["banana", "orange", "mango"];

for (let fruit of fruitlist) {
    let newListItem = document.createElement('li');
    newListItem.textContent = fruit;

    mylist.appendChild(newListItem);
}

// so now we have alist in our web page with all this fruit

