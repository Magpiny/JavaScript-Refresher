// REGULAR EXPRESSIONS: Dreaded and Loved in equal measure
// Personally, this is the part of programming that I always try very much
// to avoid...well, apart from recursion but not this time around. This
// time I'm doing it properly.

// WHAT IS REGEX? REGULAR EXPRESSIONS?
/*
Regular expressions are a way to describe patterns in string data.

A regular expression is a type of object. It can be either constructed with
the RegExp constructor or written as a literal value by enclosing a pattern in
forward slash (/) characters.
*/
let regObject = new RegExp("abc");
let regLiteral = /abc/;

print(regObject instanceof RegExp); // ->true -->Now we can proceed
print(regLiteral === regLiteral); // ->true >- Take note that the comparison returns true even if their individual values are not the same

/*
Regular Expression Object has about 11 methods
They include
  1.test() 3.lastIndex() 5.dotAll()       7.flags()      9.source()   10.sticky() -y
  2.exec() 4.global() -g    6.ignoreCase()   8.multiline()  11.unicode()
*/
/* =>1: test()
Returns a Boolean value that indicates whether or not a pattern exists in 
a searched string.

@param string — String on which to perform the search.
*/
print(regObject.test("abc")); //true
print(regObject.test("abd")); // false

/*
Executes a search on a string using a regular expression pattern, and 
returns an array containing the results of that search.

@param string — The String object or string literal on which to perform the search.
*/
print(regLiteral.exec("abc")); // Array [ "abc" ]
print(regLiteral.exec("abd")); // null

/*NOTE:
/ (forward slash) is used to denote the end of regex i.e don't search anything beyond / or search within / /
    Regex special characters like /,+,.,* etc are preceded with \(backslash)
    inoder for them to be included in the regex search string e.g
    let sevenplus = /7\+/
*/

// ################# SETS OF CHARACTERS ###########################
/*
In a regular expression, putting a set of characters between square 
brackets makes that part of the expression match any of the characters 
between the brackets.
*/
print(/[0123456789]/.test("1992")); // true
print(/[0-9]/.test("in 1992")); // true

/*
A number of common character groups have their own built-in shortcuts.
Digits are one of them: \d means the same thing as [0-9].
*/
// ########################################################################
/*
\d ->Any digit character
\w ->An alphanumeric character (“word character”)
\s ->Any whitespace character (space, tab, newline, and similar)
\D ->A character that is not a digit
\W ->A nonalphanumeric character
\S ->A nonwhitespace character
.  ->Any character except for newline


So you could match a date and time format like 01-30-2003 15:20 with the
following expression
*/
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
print(dateTime.test("01-30-2003 15:20")); //true

// An email like so samuelwanjare@gmail.com
let email = /\w\w\w\w\w\w\w\w\w\w\w\w\w@\w\w\w\w\w\.\w\w\w/;
print(email.exec("wanjaresamuel@gmail.com")); // ->Array [ "wanjaresamuel@gmail.com" ]

// Backslashes can also be used inside square brackets
// [\d.] means any digit or a period character.

/*
to express that you want to match any character except the ones in the 
set you can write a caret (^) character after the opening bracket.
let notBinary = /[^01]/;
 */

/*  ==> REPEATING PARTS OF A PATTERN <==
When you put a plus sign (+) after something in a regular expression, it
indicates that the element may be repeated more than once. Thus, /\d+/
matches one or more digit characters.
*/
// + repeating 1 or more times
let email2 = /\w+@\w+\.\w+/;
print(email2.exec("samuelwanjare@gmail.com")); // ->[ "samuelwanjare@gmail.com" ]

/* * repeating 0 or more times
The star (*) has a similar meaning but also allows the pattern to match zero
times. Something with a star after it never prevents a pattern from matching
*/
print(/'\d*'/.test("'123'")); // → true
print(/'\d*'/.test("''")); // → true

/* ? Optionality
A question mark makes a part of a pattern optional, meaning it may occur
zero times or one time.
*/
let color = /colou?r/;
print(color.exec("colour")); // Array [ "colour" ]
print(color.exec("color")); // Array [ "color" ]

/* ==> PRECISE REPETITION {number} or {lower, upper} <-- range
To indicate that a pattern should occur a precise number of times, use braces.
Putting {4} after an element, for example, requires it to occur exactly four
times. It is also possible to specify a range this way: {2,4} means the element
must occur at least twice and at most four times.

You can also specify open-ended ranges when using braces by omitting the
number after the comma. So, {5,} means five or more times.
*/
let email3 = /\w+@\w{5,8}\.\w{3}/;
print(email3.exec("jane@gmail.com"));

// Let's try one for Today's date 18/12/2022
let date = /\d{1,2}\/\d{1,2}\/\d{4}/; // ->Array [ "18/12/2022" ]
print(date.exec("18/12/2022"));

/* -> GROUPING AND SUBEXPRESSION
To use an operator like * or + on more than one element at a time, you have to
use parentheses.

i --> case insesitive ie. Match both uppercase and lowercase
*/
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo")); // → true

// DATE CLASS
function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
print(getDate("1-30-2003")); // ->Date Thu Jan 30 2003 00:00:00 GMT+0300 (East Africa Time)

/* WORD & STRING BOUNDARIES
   ^ AND $
   The caret (^) matches the start of the input string, whereas the dollar sign ($) matches the end.
   /^!/ matches any string that starts with an exclamation mark
*/

/* WORD BOUNDARY -> \b
A word boundary can be the start or end of the string or any point in the string that 
has a word character(as in \w) on one side and a nonword character on the other.
*/
print(/cat/.test("concatenate")); // → true
print(/\bcat\b/.test("concatenate")); // → false

/* CHOICE PATTERNS (|)
The pipe character (|) denotes a choice between the pattern to its left and the 
pattern to its right. 

example:
  Say we want to know whether a piece of text contains not only a number but a
  number followed by one of the words pig, cow, or chicken, or any of their plural
  forms. 
*/
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
print(animalCount.test("15 pigs")); // ->true
print(animalCount.test("15 cowchickens")); // ->false

/* =>THE REPLACE METHOD
Normally the String replace method take two arguments, the string to be
replaced and the replacing string... But it can do more than just that,
e.g it can take a regular expression and a function and more as we're going
to see
*/
// Normally
let mystring = "hello world";
print(mystring.replace("hello", "Good morning")); //->Good morning world

// Advanced
print(mystring.replace(/hello/, "heko")); // ->heko world
print(mystring.replace(/[o]/g, "u")); // ->hellu wurld g-matches the whole string
print(mystring.replace(/[o]/, "u")); // ->hellu world  without g - only the first occurence of the match is matched
print(mystring.replace(/[e|o]/g, "u")); // -> hullu wurld

// => => => => => => => => => => => => => => => => => =>
let membernames = "Samuel, Wanjare\nJane, Doe\nJohn, Doe";
print(membernames.replace(/(\w+), (\w+)/g, "$2 $1"));
/* Output of the above code
    Wanjare Samuel
    Doe Jane
    Doe John

    The $1 and $2 in the replacement string refer to the parenthesized groups in
the pattern. $1 is replaced by the text that matched against the first group, $2
by the second, and so on, up to $9. The whole match can be referred to with
$&.
*/

// => => => => => => => => => => => => => => => => => =>
// Passing a function to replace method()
let str = "the cid and nis";
print(str.replace(/\b(nis|cid)\b/g, (str) => str.toUpperCase())); // ->the CID and NIS

// => => => => => => => => => => => => => => => => => =>
let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(_, unit, item) {
  unit = Number(unit) - 1;
  if (unit == 1) {
    // only one left, remove the 's'
    item = item.slice(0, item.length - 1);
  } else if (unit == 0) {
    unit = "No";
  }
  return `${unit} ${item}`;
  //return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));

// => => => => => => => => => => => => => => => => => =>
// GREED
/*
It is possible to use replace to write a function that removes all comments
from a piece of JavaScript code.
Code that strips comments from a javascript file
[^] --> All Non empty values

We cannot just use a period here because block comments can continue on a 
new line, and the period character does not match newline characters.

*/
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
print(stripComments("1 + /* 2 */3")); // -> 1 + 3

/* // GREEDINESS EXPLAINED
The repetition operators (+, *, ?, and {}) are greedy, meaning they match as much as they 
can and backtrack from there. If you put a question mark after them (+?, *?, ??, {}?), they
become nongreedy and start by matching as little as possible, matching more only when
the remaining pattern does not fit the smaller match.
*/
function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}
print(stripComments("1 /* a */+/* b */ 1")); // 1 + 1

// => => => => => => => => => => => => => => => => => =>
// Dynamically creating RegExp objects
// second parameter g->globally i->case insensitive
let myName = "Wanjare";
let text = "Wanjare is an awesome programmer.";
let regexp = new RegExp("\\b(" + myName + ")\\b", "gi");
console.warn(text.replace(regexp, "_$1_")); //-> _Wanjare_ is an awesome programmer.

// => => => => => => => => => => => => => => => => => =>
/* ==> THE SEARCH METHOD
returns the first index on which the expression was found, or -1
when it wasn’t found
*/
console.log("  word".search(/\S/)); // → 2
console.log("".search(/\S/)); // → -1

//be cautious with global regular expressions.
console.log("Banana".match(/an/g)); // → ["an", "an"]

// LOOPING OVER MATCHES
let input = "A string with 3 numbers in it... 42 and 88.";
let mynumber = /\b\d+\b/g;
let match;
while ((match = mynumber.exec(input))) {
  console.log("Found", match[0], "at", match.index);
} /* Zero or more occurrences
/* |Output of the above loop;
    Found 3 at 14 
    Found 42 at 33 
    Found 88 at 40
*/ /*->Zero or more occurrences

// SUMMARY
/*
/abc/ a set of characters
/[abc]/ Any character from a set of characters
/[^abc]/ Any character not in a set of characters
/[0-9]/ Any character in a range of characters
/x+/ One or more occurrences of the pattern x
/x+?/ One or more occurrences, nongreedy
/*
/x*/ /* Zero or more occurrences of the pattern
/x?/ Zero or one occurrence
/x{2,4}/ Two to four occurrences
/(abc)/ A group
/a|b|c/ Any one of several patterns
/\d/ Any digit character
/\w/ An alphanumeric character (“word character”)
/\s/ Any whitespace character
/./ Any character except newlines
/\b/ A word boundary
/^/ Start of input
/$/ End of input 

*/

// TOUGH HUH? PRACTICE PRACTICE PRACTICE PRACTICE PRACTICE
