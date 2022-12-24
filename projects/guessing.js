// Number guessing game
let guesses = 0;
let userNumber = parseInt(prompt("Enter a number between 1 and 10"));
if (userNumber === NaN || userNumber <= 0 || userNumber > 9) {
  alert("Invalid number!! Enter a number greater than 0 but less than 10 ");
}
let num = Math.floor(Math.random() * 10);
while (userNumber != num) {
  let userNumber = prompt("Enter a number between 1 and 10");
  if (userNumber === NaN || userNumber <= 0 || userNumber > 9) {
    alert("Invalid number!! Enter a number greater than 0 but less than 10 ");
  }
  guesses += 1;
  if (userNumber == num) {
    let percent = (1 / guesses) * 100;
    alert(`It took you ${guesses} guesses to get the correct number,
        Your guessing accuracy is ${percent.toPrecision(4)}%`);
    document.write(`It took you ${guesses} guesses to get the correct number,
        Your guessing accuracy is ${percent.toPrecision(4)}%`);
    break;
  }
}
