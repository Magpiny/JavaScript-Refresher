let print = console.log; // Typing console.log every time is a pain, i'll use print instead
/* Array is a unique object used to
// store all formats of data ie. numbers,
// Strings, objects all can be stored inside
// an array
*/

// Example: An array of strings
let fruits = ["Mangoe", "Oranges", "Apples"];

// Accessing array elements: 0 index based
fruits[0]; // Mangoe

// Getting size of an array
fruits.length; //->3 Gives the number of items in an array

//Accessing an element in an array

/* indexOf() & lastIndexOf()
To search for a specific value, arrays provide an indexOf method. The method
searches through the array from the start to the end and returns the index at
which the requested value was found—or -1 if it wasn’t found. To search from
the end instead of the start, there’s a similar method called lastIndexOf.
*/
let array = [1, 2, 3, 4, 16, 8];
// indexOf()
array.indexOf(4); //->3 searches from the start
// lastIndexOf()
array.lastIndexOf(3); //->2 searches from the end

// THE REST PARAMETERS
// Used in writng function that accept unlimited arguments
// e.g Math.max(3,4,5,6,7,8) /->8
function max(...numbers) {
  let result = -Infinity;
  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}
console.log(max(2, 3, 4, 5)); //-> 5

// Let's now recreate the Math.min() function
function min(...numbers) {
  let res = Infinity;
  for (const number of numbers) {
    if (number < res) res = number;
  }
  return res;
}
console.log(min(2, 3, 4, 5)); //->2

// Sum() function
function sum(...numbers) {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(2, 3, 4)); //-> 9 ...sth rest is aweome^^^\/^^^

// product() function
function product(...numbers) {
  let product = 1;
  if (numbers == "" || Number.isNaN(numbers) || numbers == []) {
    return "Enter a number please";
  }
  for (number of numbers) {
    product *= number;
  }
  return product;
}
console.log(product(10, 10, 10)); // -> 1000
console.log(product(...[1, 2, 3])); //

// Iterating over an array
// ARRAY (HELPER FUNCTIONS) METTHODS

let array4 = [1, 2, 3, 4, 5];

/* ->1: every()
  Determines whether all the members of an array satisfy the specified test.
*/
print(array4.every((test) => test > 0)); // -> true

/* ->2: fill()
  Changes all array elements from start to end index to a static value and
  returns the modified array
  @param value — value to fill array section with
  @param start index to start filling the array at. If start is negative, 
  it is treated as length+start where length is the length of the array.
  @param end index to stop filling the array at. If end is negative, it is
  treated as length+end. end index excluded
*/
print(array4.fill(3, 2, 4)); // Array(5) [ 1, 2, 3, 3, 5 ]

/* ->3: filter()
  Returns the elements of an array that meet the condition specified in a
  callback function.
*/
print(array4.filter((item) => item > 2)); // Array(3) [ 3, 3, 5 ]

/* ->4: find()
Returns the value of the first element in the array where predicate is 
true, and undefined otherwise.
*/
print(array4.find((item) => item > 3)); //5

/* ->5: findIndex()
Returns the index of the first element in the array where condition 
specified in a callback function is true, and -1 otherwise.
*/
print(array4.findIndex((item) => item == 5)); //4

/* ->6: includes()
 */
print(array4.includes(4)); // false?? the array had been modified by the fill method so we have 3 in that place

/* ->7: indexOf()
Returns the index of the first occurrence of a value in an array, 
or -1 if it is not present.

@param searchElement — The value to locate in the array.
@param fromIndex — The array index at which to begin the search. If fromIndex is 
omitted, the search starts at index 0.
*/
print(array4.indexOf(2)); // 1

/* ->8: Join()
  Adds all the elements of an array into a string, separated by the 
  specified separator string.

  @param separator - A string used to separate one element of the array from the next in the 
  resulting string. If omitted, the array elements are separated with a 
  comma.
*/
print(array4.join("")); // 12335

/* ->9: map()
  Calls a defined callback function on each element of an array, and 
  returns an array that contains the results.

  @param callbackfn — A function that accepts up to three arguments. The 
  map method calls the callbackfn function one time for each element in 
  the array.
  @param thisArg — An object to which the this keyword can refer in the 
  callbackfn function. If thisArg is omitted, undefined is used as the 
  this value.
*/
print(array4.map((item) => item * 2)); // Array(5) [ 2, 4, 6, 6, 10 ]

/* ->10: pop()
  Removes the last element from an array and returns it. If the array is 
  empty, undefined is returned and the array is not modified.
*/
print(array4.pop()); // 5

/* ->11: push()
Appends new elements to the end of an array, and returns the new length 
of the array.

@param items — New elements to add to the array.
*/
print(array4.push(5, 6)); // 6

/* ->12: reduce()
  Calls the specified callback function for all the elements in an array. 
  The return value of the callback function is the accumulated result, and 
  is provided as an argument in the next call to the callback function.

  @param callbackfn — A function that accepts up to four arguments. The 
  reduce method calls the callbackfn function one time for each element in 
  the array.

  @param initialValue — If initialValue is specified, it is used as the 
  initial value to start the accumulation. The first call to the callbackfn 
  function provides this value as an argument instead of an array value.

*/
print(array4.reduce((prevValue, currentValue) => prevValue + currentValue)); // 20

/* ->13: reduceRight()
Calls the specified callback function for all the elements in an array, in 
descending order. The return value of the callback function is the 
accumulated result, and is provided as an argument in the next call to the 
callback function.

@param callbackfn — A function that accepts up to four arguments. The 
reduceRight method calls the callbackfn function one time for each element 
in the array.

@param initialValue — If initialValue is specified, it is used as the 
initial value to start the accumulation. The first call to the callbackfn 
function provides this value as an argument instead of an array value.
*/
print(array4.reduceRight((lsb, msb) => lsb + msb)); // 20

/* ->14: reverse()
  Reverses the elements in an array in place. This method mutates the array
  and returns a reference to the same array.
*/
print(array4.reverse()); // Array(6) [ 6, 5, 3, 3, 2, 1 ]

print(delete array4[3]); // true Deletes an array element at certain position

print(array4); // Array(6) [ 6, 5, 3, <1 empty slot>, 2, 1 ]

array4[3] = 7;

print(array4); // Array(6) [ 6, 5, 3, 7, 2, 1 ]
