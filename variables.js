// How to declare variables in JS
const myname = "Samuel Wanjare"; //highly recommended esp on variable that will not change
let age = 48; // Use only if a variable will change
var isOffline = true; //proscribed bcoz of so many shortcomings with it

print(myname); // Samuel Wanjare

/* 
    NB:
    let age = 48; //is a statement
    let disount= price - price*(percentageDiscount/100); //is an expression
    Expressions evalutes to a value while statements do not

    const a =10; // Const variables are initialized immediately
    let b;
        b=20; // let variables can be assigned later 
    const a =30, b=12; // Several variables can be declared at once
    let c = 10, d=21;

    let a = 10;
    let a =20; // Redeclaration of variables not allowed
*/

// Single line comments

/*
    Multiline comments
*/

/**
 * Documentation comments
 * @copyright Samuel Wanjare
 * @param hello
 * @function hello
 * @TODO Add more variables
 *
 */

const user = {
  fruits: ["Joy", "Love", "Patience", "Peace", "Gratitude"],
  message: function () {
    return `${this.fruits[4]} is important in life`;
  },
};

let plantFruits = ["Mangoes", "Oranges", "Apples"];

let greetings = () => print(`${plantFruits[0]} are juicy fruits`);

function greetings2() {
  print(`${plantFruits[1]} are political`);
}
// Checking types
// You can check for the type of a variable using unary operator -> typeof
print(typeof age); // number
print(typeof name); // string
print(typeof isOffline); // boolean
print(typeof user); // object
print(typeof user.fruits); // object

print(typeof user.message()); // string?? What?? Is this a joke?
print(typeof user.message); // fuction

print(typeof plantFruits); // Objects but I expected arrays???

print(typeof greetings); // function
print(typeof greetings()); // undefined?? What went wrong?

print(typeof greetings2()); // Oranges are political ; Holy shit! What??
print(typeof greetings2); // function
//Take note of
user.message(); // -> undefined --> OOh Lord but why?
print(user.message()); //->Gratitude is important in life  --> finally

/*
    To a beginner js developer,
    You must have asked yourself so many questions on what you've just seen
    why are we using 'this' here and not there... The square brackets why?
    In JavaScript we use console.log to print ouput and not print but you
    have used print all over... Why? How's that possible?
    Some functions are returning string type while some undefined type when
     you print out the output? Why? 

    All this cannot be learnt in a day but you can learn them by following 
    along into the next files on data structures:arrays.js, strings.js,functions.js,
    and oop.js But to understand them better, patience and practice is key.

    Thorough research is of utmost importance here

    ROCK N ROLL ^^^v^^^
*/
