/**
 * @author SW
 * NODEJS BASICS
 */

//START OF MIC TEST: This code has been used to check if
// nodejs is working as intended
let print = console.log;
print("Hello world");

function add(...values) {
  let res = values.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0
  );
  return res;
}

let addition = add;
print(addition(34, 34, 34, 34));

module.exports = addition;

// END OF MIC CHECK; Everything is working perfectly in nodejs
