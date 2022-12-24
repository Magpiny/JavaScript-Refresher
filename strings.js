// Strings
/*
 Are enclosed inside single or double quotes
 Is a primitive type
 Are immutable: cannot be changed
 Have several methods like concat(),split(),reverse(),join(),repeat() etc
*/
let name = "Samuel Wanjare ";

// Reversing an array
let reversedName = name.split("").reverse().join("");
console.log(reversedName); //-> erajnaW leumaS

// Repeat()
let rptName = name.repeat(3);
console.log(rptName); //-> Samuel WanjareSamuel WanjareSamuel Wanjare

// size of a string
name.length; // returns number of items in a string

// Accessing an element in a string
name[0]; //-> S

// STRING METHODS

// Since I'm tired of writing console.log every time, allow me to use print
// instead, it's easier to type. Python folks! Happy? Let's rock and roll

let word = "Hello world";

// ->1: charAt()
print(word.charAt(3)); // -> 1 ;Returns the character at the specified index.

/* ->2: concat()
  Returns a string that contains the concatenation of two or more strings.
  @param strings — The strings to append to the end of the string.
*/
print(word.concat(" +plus concatenated string"));
/* ->3: endsWith()
Returns true if the sequence of elements of searchString converted to a 
String is the same as the corresponding elements of this object 
(converted to a String) starting at endPosition – length(this). Otherwise 
returns false.
 */
print(word.endsWith("d")); // -> true

/* ->4: includes()
Returns true if searchString appears as a substring of the result of 
converting this object to a String, at one or more positions that are 
greater than or equal to position; otherwise, returns false.
@param searchString — search string
@param position — If position is undefined, 0 is assumed, so as to search all of the String.
*/
print(word.includes("e", 1)); // -> true

/* ->5: indexOf() ;
Returns the position of the first occurrence of a substring.
@param searchString — The substring to search for in the string
@param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
*/
print(word.indexOf("o", 5)); // -> 7

/* ->6: length ;property
    Returns the length of a String object.
*/
print(word.length); // -> 11

/* ->7: match()
    Matches a string with a regular expression, and returns an array 
    containing the results of that search.
 */
print(word.match(/[A-Z]/g)); // -> Array [ "H" ]
print(name.match(/[A-Z]/g)); // -> Array [ "S", "W" ]

/* ->8: repeat()
    Returns a String value that is made from count copies appended together. 
    If count is 0, the empty string is returned.
    @param count — number of copies to append
*/
print(word.repeat(2)); // -> Hello worldHello world

/* ->9: replace()
    Replaces text in a string, using a regular expression or search string.
    @param searchValue — A string to search for.
    @param replaceValue — A string containing the text to replace for 
    every successful match of searchValue in this string.
 */
print(word.replace("Hello", "Hi"));

/* ->10: slice()
Returns a section of a string.
@param start — The index to the beginning of the specified portion of 
stringObj.
@param end
The index to the end of the specified portion of stringObj. The substring 
includes the characters up to, but not including, the character indicated 
by end. If this value is not specified, the substring continues to the end 
of stringObj.
*/
print(word.slice(6, 11)); // -> world

/* ->11: split()
    Split a string into substrings using the specified separator and return
    them as an array.
    @param separator — A string that identifies character or characters to 
    use in separating the string. If omitted, a single-element array 
    containing the entire string is returned.
    @param limit — A value used to limit the number of elements returned in the array.
*/
print(word.split("", 6)); // -> [ "H", "e", "l", "l", "o", " "]

/* ->12: substring()
    Returns the substring at the specified location within a String object.
    @param start — The zero-based index number indicating the beginning of 
    the substring.
    @param end - Zero-based index number indicating the end of the 
    substring. The substring includes the characters up to, but not 
    including, the character indicated by end. If end is omitted, the 
    characters from start through the end of the original string are returned.
*/
print(word.substring(0, 5)); // -> Hello

/* ->13a: toLower()
    Converts all the alphabetic characters in a string to lowercase.
*/
print(word.toLowerCase());
/* ->13b: toLocaleLower()
    Converts all alphabetic characters to lowercase, taking into account 
    the host environment's current locale.
*/
print(word.toLocaleLowerCase());

/* ->14a: toUper()
    Converts all the alphabetic characters in a string to uppercase.
*/
print(word.toUpperCase());
/* ->14b: toUper()
    Converts all the alphabetic characters in a string to uppercase.
*/
print(word.toLocaleUpperCase());
let number = 12034;
print(typeof number.toString()); // string
