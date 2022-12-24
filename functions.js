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
great("John");
function great(who) {
  print(`Hello ${who}`);
}

let say = function () {
  return "Say what?";
};
print(say() + " Hello from print variable"); //-> Hello from print variable

// Higher Order functions
// Functions that take other functions as arguments or return a function
/*
 */
// Average function
let average = ([...averages]) => {
  return averages.reduce((a, b) => a + b) / averages.length;
  // The reduce method on the array is an higher order function
};

print(average([7, 2, 3, 5, 8])); // -> 5
