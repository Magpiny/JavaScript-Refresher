/*
Functions are first class citizens in JS
You know functions very well you know JS
There are three ways of definning fuctions

1. Using the function keyword
    e.g funcion hello(){ console.log("Hello world")};

2. Assigning a function to a variable ()
    e.g const hello = function() => console.log("Hello world");

3. Arrow functions
    e.g const hello = () => console.log("Hello world");

4.  Anonymous functions (Functions without names)
    i) function () { console.log("Hello world")};
    ii) () => console.log("Hello worls");

    To execute/run a function we must call them
    e.g hello() The parenthesis are a MUST but arguments optional

    Functions that don't have the return statement return 'undefined'
*/
// greetings("John");

// function greetings(who) {
//   console.log(`Hello ${who}`);
// }

// let greetings = (who) => console.log(`Hello ${who}`);
// greetings("John");

/* Anonymous functions */

((who) => console.log(`Hello ${who}`))("John");
// OR
(function (who) {
  console.log(`Hello ${who}`);
})("John");

//-> Hello John

let say = function () {
  return "Say what?";
};
console.log(say() + " Hello from console.log variable"); //-> Hello from console.log variable

// Higher Order functions
// Functions that take other functions as arguments or return a function
/*
 */
// Average function
let average = ([...averages]) => {
  return averages.reduce((a, b) => a + b) / averages.length;
  // The reduce method on the array is an higher order function
};

console.log(average([7, 2, 3, 5, 8])); // -> 5

//constructor function

function Somebody(name, age) {
  this.name = name;
  this.age = age;
  this.message = function () {
    return `Hello ${this.name} you're ${this.age}yrs old`;
  };
  return this.message();
}
console.log(Somebody("John", 23));
//->Hello John you're 23yrs old

console.log(new Somebody("John", 23).name); //-> John
console.log(new Somebody("John", 23).age); //-> 23

let newbody = new Somebody("Sam", 34);
console.log(newbody.message());

//The Function constructor
/*
It takes two arguments: a string containing a 
comma-separated list of argument names and a string containing the 
function body.
*/

let greetingsPro = Function("who", "return `Hello ${who}`");
console.log(greetingsPro("John"));

//-> Hello John
/** The END >< follow @SamuelWanjare for more of this content */

module.exports = [average, greetingsPro];
