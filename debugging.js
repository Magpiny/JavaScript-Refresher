/*
    Here we'll talk about error handling in JS
    All the opinions here are my personal takes you're allowed to
    differ with me. I'm sorry if I insulted your intellect
*/
// BUGS - Flaws in a computer program
// DEBUGGING - The process of correcting/eliminating the flaws
// Bugs are always programmer made

/* ==>1: USE STRICT
JavaScript can be made a little stricter by enabling strict mode. This is done by
putting the string "use strict" at the top of a file or a function body. Here’s
an example:
*/

function canYouSpotTheProblem() {
  "use strict";
  for (let counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
canYouSpotTheProblem();

// VERDICT: 'use strict' in your programs to see obvious bugs beforehand

// ==>2: TYPE ANOTATIONS: Typescript thrives at this
// function hello(message: String) {
//   return typeof message;
// }
// console.log(hello('JS is awesome')) //->string

// VERDICT: To add types to JS use Typescript--> JS with types

// ==>3: TESTING
// Automated testing is the process of writing a program that tests another
//program.
// Testing is one of the most daunting tasks in progrmming but very useful
// WHY? USEFUL because when your program passes all tests, it runs smoothly
//almost bug free. But what if your test has a bug? Determining the context
// in which to run the test can be challenging, also writing tests is time-consuming
// and tasking than writing the program itself.
// HELLO 'TEST RUNNERS'
// Test runner is a program/software that runs tests on a piece of code in
// a certain programming language. e.g react-testing library etc

// VERDICT: Use test-runners/ testing program

// ==>4: DEBUGGING
// Resist the urge to quickly change the program but think it through
// use console.log()
// use browser debigger>>>
//

// ==>5: ERROR PROPAGATION
// Returning an error value in our program in case of failure instead of crushing
// completely
function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}
//console.log(promptNumber("Hello there"));

// ==>6: EXCEPTION
/*
Exceptions are a mechanism that makes it possible for code that runs into
a problem to raise (or throw) an exception. An exception can be any value.
*/
/*
1. throw new Error('Error message');
2. try - catch bblock
  try{
    hello("Wow")
  }catch(e){
    console.log("Error: " + e)
  }
3. try-catch-finally block
  try{
    hello("Wow")
  }catch(e){
    console.log("Error: " + e)
  }finally{
    console.log("Execute no matter what happens")
  }

  Note that even though the finally code is run when an exception is thrown
in the try block, it does not interfere with the exception. After the finally
block runs, the stack continues unwinding.
*/
//1; throw new Error(mssg)
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

//2&3; try & catch blocks
function look() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

// try {
//   console.log("You see", look());
// } catch (error) {
//   console.log("Something went wrong: " + error);
// }

//3; finally
function transfer(from, amount) {
  if (accounts[from] < amount) return;
  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress == 1) {
      accounts[from] += amount;
    }
  }
}
// ==>7: SELECTIVE CATCHING
/*
JavaScript (in a rather glaring omission) doesn’t provide direct support for
selectively catching exceptions: either you catch them all or you don’t catch
any.

So we want to catch a specific kind of exception. We can do this by checking
in the catch block whether the exception we got is the one we are interested
in and rethrowing it otherwise.

Define a new type of error and use instanceof to identify it.
*/
class InputError extends Error {}
function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

/*
This will catch only instances of InputError and let unrelated exceptions
through. If you reintroduce the typo, the undefined binding error will be prop-
erly reported.
*/
// for (;;) {
//   /**
// The for (;;) construct is a way to intentionally create a loop that doesn’t
// terminate on its own. We break out of the loop only when a valid direction is
// given.
//    */

//   try {
//     let dir = promptDirection("Where?");
//     console.log("You chose ", dir);
//     break;
//   } catch (e) {
//     if (e instanceof InputError) {
//       console.log("Not a valid direction. Try again.");
//     } else {
//       throw e;
//     }
//   }
// }

// ==>7: ASSERTIONS
/*
Assertions are checks inside a program that verify that something is the way
it is supposed to be. They are used not to handle situations that can come 
up in normal operation but to find programmer mistakes.
*/

/*
If, for example, firstElement is described as a function that should never be
called on empty arrays, we might write it like this:
*/

function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];

  /*
  Now, instead of silently returning undefined (which you get when reading
an array property that does not exist), this will loudly blow up your program
as soon as you misuse it. This makes it less likely for such mistakes to go
unnoticed and easier to find their cause when they occur.
  */
}
