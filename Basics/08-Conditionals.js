//? If, else if, else

let age = 18;
let youCanVote = false;

if (age >= 18 && age <= 64) {
  console.log("You can vote");
  youCanVote = true;
} else if (age >= 65) {
  console.log("You can vote if you want to");
  youCanVote = true;
} else {
  console.log("You can't vote");
}

//? Ternary operator

youCanVote ? console.log("You can vote") : console.log("You can't vote");

//? Switch

switch (age) {
  case 18:
    console.log("You are 18");
    break;
  case 19:
    console.log("You are 19");
    break;
  default:
    console.log("You are neither 18 nor 19");
}
