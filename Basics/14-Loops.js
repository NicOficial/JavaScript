"use strict";

//? For

for (let i = 0; i < 5; i++) {
  console.log(`Hola ${i}`);
}

const names = ["Carlos", "Alejandra", "Carmen", "Juan"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//? While

let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++;
}

//? Do While

i = 0;

do {
  console.log(names[i]);
  i++;
} while (i < names.length);

//? For of

let myAnimals = ["gato", "perro", "loro", "pez", "tortuga"];
let myLibrary = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"]);
let myMonths = new Map([
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);

//* For of with Arrays
for (let values of myAnimals) {
  console.log(values);
}

//* For of with Sets
for (let values of myLibrary) {
  console.log(values);
}

//* For of with Maps
for (let values of myMonths) {
  console.log(values);
}

//* For of with Strings
let myString = "Hello World";

for (let values of myString) {
  console.log(values);
}

//? Break and Continue

//* Break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); //todo 0, 1, 2, 3, 4
}

//* Continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); //todo 0, 1, 2, 3, 4, 6, 7, 8, 9
}
