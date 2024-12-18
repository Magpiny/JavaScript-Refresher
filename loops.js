/**
 * Loops are used to perform some repetitive tasks
 * Examples
 *  *While loop
 *  *Do... while loop
 *  *for loop
 *  * for... of loop (INTRODUCED IN 2015)
 *  * for... in loop
 *  * SPECIAL (these are mostly used with arrays)
 *      * forEach loop
 *      * map
 *      * slice
 *      * filter
 *      * reduce
 */

// WHILE LOOP

let scoops = 5;
while (scoops >= 0) {
  if (scoops == 0) {
    console.log("Plate cleared");
    break;
  }
  console.log("Clearing this plate in a few..");
  scoops = scoops - 1;
}

// DO.. WHILE LOOP
let no = 10;
do {
  no--;
  console.log(`${no}: This is a do while loop`);
} while (no > 0);

// FOR LOOP

// FOR.. OF LOOP
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of nums) {
  console.log(number ** 2);
}
// FOR.. OF LOOP
let foods = ["Cake", "Ugali", "Nyama Choma", "Mandazi", "Meat"];
for (const food of foods) {
  console.log(`${food} is awesome`);
}

//FOR... IN LOOP
// This loop prints out the index of contents of an array
//instead of the contents
let array1 = ["All", "men", "are", "dogs!"];
for (const index in array1) {
  console.log(`${index}: ${array1[index]}`);
}

// SPECIAL LOOPS
// FOREACH()
// MAP()
