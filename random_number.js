
let r = Math.floor(Math.random() * 100)
let chances = 0;
do {
  let b = prompt("Enter a number")
  b = Number.parseInt(b)
  if (b == r) {
    console.log("Guess is correct")
    console.log("You guessed in "+chances+ " number of chances")
    break;
  }
  else if (b > r && b<100)
    console.log("Guess is large")
  else if (b < r && b > 0)
    console.log("Guess is small")
  else
    console.log("Enter valid number")
  chances++;
} while (chances < 100)

