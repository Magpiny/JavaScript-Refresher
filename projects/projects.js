/**
 * Assignments on JS Programming
 * All the assignments in this file are from
 *  the awesome book: Eloquent JavaScript
 */

//1 LOOPING A TRIANGLE
/* TASK:
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
 */

//SOLUTIONS
let check = "";
while (check.length <= 7) {
  check += "#";
  console.log(check);
}

//2 FIZZBUZZ EXTRA***
/* TASK:
Write a program that uses console.log to print all the numbers from 1 
to 100, with two exceptions. For numbers divisible by 3, print "Fizz" 
instead of the number, and for numbers divisible by 5 (and not 3), print
"Buzz" instead. When you have that working, modify your program to print
"FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of 
those). (This is actually an interview question that has been claimed to
 weed out a significant percentage of programmer candidates. So if you 
solved it, your labor market value just went up.)
 */
// SOLUTION : solved!
for (let number = 0; number <= 100; number++) {
  if (number % 3 == 0) {
    if (number % 3 == 0 && number % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log("Fizz");
    }
  } else if (number % 5 == 0 && !(number % 3 == 0)) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}

//3: CHESSBOARD
/*
Write a program that creates a string that represents an 8×8 grid, 
using newlinecharacters to separate lines. At each position of the grid
there is either a space or a "#" character. The characters should form 
a chessboard. Passing this string to console.log should show something 
like this:
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
 */
// SOLUTION 1: WHILE LOOP;
let ro = "# # # # \n # # # #";
let row = 4;
while (row > 0) {
  row--;
  console.log(ro);
}

// SOLUTION 2: FOR LOOP
for (let row = 0; row < 4; row++) {
  console.log("# # # # \n # # # #");
}

// ADDons
/*
When you have a program that generates this pattern, define a binding 
size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

let check1 = "# "; // checks width is 2 by default
let check2 = " #";
let size = 7;
let halfSize = Math.floor(size / 2);
for (let height = halfSize; height > 0; height--) {
  ch = check1.repeat(halfSize);
  ch1 = check2.repeat(halfSize);
  console.log(`${ch} \n${ch1}`);
}

// ASSIGNMENTS ON FUNCTIONS
//4: MINIMUM
/* TASK  solved!
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/
function min(a, b) {
  if (a < b) {
    return console.log(a);
  }
  return console.log(b);
}

min(60, 90);

//5: RECURSION
/* TASK:
Here’sanother way to define whether a positive whole 
number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same 
as N - 2.
Define a recursive function isEven corresponding to 
this description. The function should accept a single
parameter (a positive, whole number) and return a 
Boolean. Test it on 50 and 75. See how it behaves 
on -1. Why? Can you think of a way to fix this?
 */
function isEvenRecurssive(number) {
  if (number % 2 == 1) {
    console.log(false);
  } else if (number == 0) {
    console.log(true);
  } else {
    console.log(isEvenRecurssive(number - 2));
  }
}
// On using -1, i get this error
// isEvenRecurssive(-1);
// Uncaught InternalError: too much recursion
isEvenRecurssive(75);

//6: BEAN COUNTING
/* TASK     solved!
You can get the Nth character, or letter, from a 
string by writing "string"[N]. The returned value will
be a string containing only one character 
(for example,"b"). The first character has position 0,
which causes the last one to be found at position 
string.length - 1. In other words, a two-character 
string has length 2, and its characters have positions
0 and 1.Write a function countBs that takes a string
as its only argument and returns a number that 
indicates how many uppercase “B” characters there are
in the string.Next, write a function called countChar
that behaves like countBs, except it takes a second 
argument that indicates the character that is to be 
counted(rather than counting only uppercase “B” 
characters). Rewrite countBs to make use of this new 
function.
*/
let string = "hello world";
// Getting a character at certain position in a string
console.log(string[6]);
//Reversing a string
console.log(string.split("").reverse().join(""));
// func countBs()
// PART A
function countBs(string) {
  //let newString = string.split(); xxxxxxxxxx
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] == "B") {
      count += 1;
    }
  }
  console.log(count);
}
countBs("BabvmBbmBB");

// PART B OF THE ABOVE QUESTION
/* TASK:        solved!
Next, write a function called countChar
that behaves like countBs, except it takes a second 
argument that indicates the character that is to be 
counted(rather than counting only uppercase “B” 
characters). Rewrite countBs to make use of this new 
function.

*/
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count += 1;
    }
  }
  return console.log(count);
}

countChar("character", "r");

//7: THE SUM OF A RANGE:
/* TASK
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

*/
// --> PART ONE: SOLVED
function range(start, end) {
  let array = [];
  for (let i = start; i < end + 1; i++) {
    //const element = array[i];
    array.push(i);
  }
  return array;
}
// --> PART TWO:
let sum = (...[numbers]) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
};

// --> BONUS ->TODO: Add a Step :SOLVED ^^^V^^^LIKEE
/*
As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/
function rangeWithStep(start, end, step) {
  let array = [];
  if (step && step > 0) {
    for (let i = start; i < end + 1; i += step) {
      array.push(i);
    }
  } else if (step && step < 0) {
    for (let i = start; i > end - 1; i += step) {
      array.push(i);
    }
  } else {
    for (let i = start; i < end + 1; i++) {
      array.push(i);
    }
  }

  return array;
}

// console.log(sum(1, 2, 3));
console.log(sum(range(1, 10))); // CASE 1: sum a range without step
console.log(rangeWithStep(5, 2, -1)); // CASE 2: Get range with -ve step
console.log(rangeWithStep(1, 20, 4)); // CASE 3: Get range with +ve step

//8: REVERSING AN ARRAY
/* TASK: SOLVED
Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order. The
second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.
Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/
//Case 1:
let reverseArraay = (...arrays) => {
  let finalArray = [];
  for (let i = arrays.length - 1; i >= 0; i--) {
    finalArray.push(arrays[i]);
  }
  return finalArray;
};

// Case2:
// let reverseArray = (...arrays) => {
//   let finalArray = [];
//   for (let i = 0; i < arrays.length; i++) {
//     finalArray.unshift(arrays[i]);
//   }
//   return finalArray;
// };

let reverseArray = (...[arrays]) => {
  let finalArray = [];
  for (let key in arrays) {
    finalArray.unshift(arrays[key]);
  }
  return finalArray;
};

console.log(reverseArray([1, 2, 3, 4]));

let reverseArrayInPlace = (...[arrays]) => {
  let finalArray = [];
  for (let key in arrays) {
    finalArray.unshift(arrays[key]);
  }
  console.log(finalArray);
};

reverseArrayInPlace([4, 5, 6, 7]);

//9: A List
// Passed this; I didn't understand the question in the first place

//10: DEEP COMPARISON

//11 : FLATENING
/*
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the 
original arrays.
*/
let arrayOfArays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let flat = arrayOfArays.reduce((prev, curr) => prev.concat(curr));
console.log(flat);

//12: YOUR OWN LOOP
/*
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping.
*/
// TODO: To make it work;make it make sense
function myloop(value, test, updateFunction, bodyFuction) {
  while (value) {
    test = () => {
      if (value == false) {
        return;
      }
    };
    test();
    bodyFuction = () => {
      return value;
    };
    bodyFuction();
  }
  updateFunction = () => {
    return value > 0 ? value++ : value--;
  };

  return `${bodyFuction} : ${updateFunction}`;
}

// A VECTOR TYPE
/*
Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.
Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).
 */
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus({ a }) {
    let sum = `(${a.x + this.x}, ${a.y + this.y})`;
    return sum;
  }
  minus({ a }) {
    let difference = `(${a.x - this.x}, ${a.y - this.y})`;
    return difference;
  }
  get vmagnitude() {
    let x = this.x ** 2;
    let y = this.y ** 2;
    let sum = x + y;
    let magnitude = Math.sqrt(sum);
    return magnitude;
  }
}

let vector = new Vec(3, 4);
console.log(vector.vmagnitude);
console.log(vector.plus({ a: { x: 1, y: 2 } }));
console.log(vector.minus({ a: { x: 5, y: 6 } }));

//DOM project
/* TASK:
An HTML table is built with the following tag structure:
<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>place</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>
For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags,
we can put cell elements: either heading cells (<th>) or regular cells (<td>).
Given a data set of mountains, an array of objects with name, height, and
place properties, generate the DOM structure for a table that enumerates the
objects. It should have one column per key and one row per object, plus a
header row with <th> elements at the top, listing the column names.
Write this so that the columns are automatically derived from the objects,
by taking the property names of the first object in the data.
Add the resulting table to the element with an id attribute of "mountains"
so that it becomes visible in the document.
Once you have this working, right-align cells that contain number values by
setting their style.textAlign property to "right".
*/

let mountains = [
  { name: "Mt. Kilimanjaro", height: "5801 km", place: "Tanzania" },
  { name: "Mt. Kenya", height: "5097 km", place: "Kenya" },
  { name: "Mt. Longonot", height: "3098 km", place: "Kenya" },
  { name: "Mt. Evarest", height: "11,068 km", place: "China" },
  { name: "Mt. Suswa", height: "3090 km", place: "Kenya" },
];

//console.log(th);
let list = document.getElementById("mountains");
let table = document.createElement("table");
list.appendChild(table);

let trow1 = document.createElement("tr");

let th = document.createElement("th");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th0 = document.createElement("th");

th0.textContent = "SNo";
th.textContent = "Name";
th1.textContent = "Height";
th2.textContent = "Places";

trow1.appendChild(th0);
trow1.appendChild(th);
trow1.appendChild(th1);
trow1.appendChild(th2);

table.appendChild(trow1);

for (let key in mountains) {
  let trow = document.createElement("tr");

  let td0 = document.createElement("td");
  let td = document.createElement("td");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");

  td0.textContent = Number(key) + 1;
  td.textContent = mountains[key].name;
  td1.textContent = mountains[key].height;
  td2.textContent = mountains[key].place;

  trow.appendChild(td0);
  trow.appendChild(td);
  trow.appendChild(td1);
  trow.appendChild(td2);

  table.appendChild(trow);
}

if ((table.firstElementChild = "tr")) {
  trow1.style.backgroundColor = "gray";
  trow1.style.alignContent = "center";
  trow1.style.textAlign = "center";
  trow1.style.fontSize = "2rem";
  th.style.padding = ".9rem";
  th1.style.padding = ".9rem";
  th2.style.padding = ".9rem";
}
