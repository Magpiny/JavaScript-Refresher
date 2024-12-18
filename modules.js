// MODULES
// WRITE CODE THAT IS EASY TO DELETE NOT EASY TO EXTEND

//1: Interpreting data as code
/*The Function constructor. It takes two arguments: a string containing a 
comma-separated list of argument names and a string containing the 
function body.
*/
let plusOne = Function("n", "return n + 1;");
print(plusOne(4)); // ->5 //->Works

//-> Mon 19 Dec 2022;Dicovered that you can write a function this way
let grtage = Function("mssg,age", "return mssg+' you are '+age+'yrs old'");
print(grtage("Good morning Jane", 23)); //-> Good morning Jane you are 23yrs old

//2: CommonJS
// We use require() function ->it makes sure the module is loaded and returns its interface.

/* SYNTAX: 
    To consume/import
        const {parse} = require("ini"); //'ini' is interpreted as file name
        const express = require("express")
    To share/export
        exports.function xyz(){}
        module.exports variable =xy 
*/

//3: ECMASCRIPT MODULE
/* SYNTAX:
    To share/export
        function add(a,b){return a+b}
        export default add;
        export mult = (a,b) => a*B;

        export keyword is used to export things. It may appear in front of a 
        function, class, or binding definition (let, const, or var).
        export default ["Winter", "Spring", "Summer", "Autumn"];

    To use/import
    import declarations may not appear inside functions or blocks, and the names of 
    dependencies must be quoted strings, not arbitrary expressions.
    import add from 'xyzfile'
    import { mult } from 'filename'
*/

/* MODULE DESIGN
 */
