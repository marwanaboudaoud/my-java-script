//A closure is an inner function that has access to the outer
//(enclosing) function’s variables—scope chain. 
//The closure has three scope chains: it has access to its own 
//scope (variables defined between its curly brackets), 
//it has access to the outer function’s variables, 
//and it has access to the global variables.

//The inner function has access not only to the outer function’s 
//variables, but also to the outer function’s parameters. 
//Note that the inner function cannot call the outer function’s
//arguments object, however, even though it can call the outer 
//function’s parameters directly.

//You create a closure by adding a function inside another function.

//A Basic Example of Closures in JavaScript:

function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {        
    return nameIntro + firstName + " " + lastName;    
    }
    return makeFullName ();
    }


    showName ("marwan", "aboudaoud"); 
    //"Your name is marwan aboudaoud"

    showName ("Michael", "Jackson"); 
    //"Your name is Michael Jackson"

//************************************************************************** */
    function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() { // displayName() is the inner function, a closure
          console.log(name); // use variable declared in the parent function    
        }
        displayName();    
      }
      init();
//Mozilla

//Here's a slightly more interesting example

function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12

  

