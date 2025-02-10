//* NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

"use strict";

//* 1. Crea un bucle que imprima los números del 1 al 20

let i = 0;

// for (let i = 0; i <= 20; i++) {
// console.log(i);
// }

// while (i < 20) {
//   console.log(i);
//   i++;
// }

// i = 0;

// do {
//   i++;
//   console.log(i);
// } while (i < 20);

//* 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let total = 0;

// for (let i = 1; i <= 100; i++) {
//   total += i;
// }

// i = 0;

// while (i < 100) {
//   i++;
//   total += i;
// }

// i = 0;
// do {
//   i++;
//   total += i;
// } while (i < 100);

// console.log(`El total es: ${total}`);

//** 3. Crea un bucle que imprima todos los números pares entre 1 y 50

// for (let i = 1; i <= 50; i++) {
// if (i % 2 == 0) {
//   console.log(i);
// }
// }

// i = 1;

// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// i = 1;

// do {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 50);

//* 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names = ["Nico", "Valen", "Santi", "Lauti", "Mati"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// i = 0;

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// i = 0;

// do {
//   console.log(names[i]);
//   i++;
// } while (i < names.length);

//* 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let amountVowels = 0;
let array = "Esta frase es godeanoameganasheeeee";

// for (let i = 0; i < array.length; i++) {
//   switch (array[i]) {
//     case "A":
//       amountVowels++;
//       break;
//     case "a":
//       amountVowels++;
//       break;
//     case "E":
//       amountVowels++;
//       break;
//     case "e":
//       amountVowels++;
//       break;
//     case "I":
//       amountVowels++;
//       break;
//     case "i":
//       amountVowels++;
//       break;
//     case "O":
//       amountVowels++;
//       break;
//     case "o":
//       amountVowels++;
//       break;
//     case "U":
//       amountVowels++;
//       break;
//     case "u":
//       amountVowels++;
//       break;
//   }
// }

// i = 0;

// while (i < array.length) {
//   switch (array[i]) {
//     case "A":
//       amountVowels++;
//       break;
//     case "a":
//       amountVowels++;
//       break;
//     case "E":
//       amountVowels++;
//       break;
//     case "e":
//       amountVowels++;
//       break;
//     case "I":
//       amountVowels++;
//       break;
//     case "i":
//       amountVowels++;
//       break;
//     case "O":
//       amountVowels++;
//       break;
//     case "o":
//       amountVowels++;
//       break;
//     case "U":
//       amountVowels++;
//       break;
//     case "u":
//       amountVowels++;
//       break;
//   }
//   i++;
// }

// i = 0;

// do {
//   switch (array[i]) {
//     case "A":
//       amountVowels++;
//       break;
//     case "a":
//       amountVowels++;
//       break;
//     case "E":
//       amountVowels++;
//       break;
//     case "e":
//       amountVowels++;
//       break;
//     case "I":
//       amountVowels++;
//       break;
//     case "i":
//       amountVowels++;
//       break;
//     case "O":
//       amountVowels++;
//       break;
//     case "o":
//       amountVowels++;
//       break;
//     case "U":
//       amountVowels++;
//       break;
//     case "u":
//       amountVowels++;
//       break;
//   }
//   i++;
// } while (i < array);

// console.log(
//   `En la frase: ${array}
// Se encontraron ${amountVowels} vocales`,
// );

//* 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let myNumbers = [2, 3, 5];
total = 1;

// for (let i = 0; i < myNumbers.length; i++) {
//   total *= myNumbers[i];
// }

// i = 0;

// while (i < myNumbers.length) {
//   total *= myNumbers[i];
//   i++;
// }

// console.log(total);

//* 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multiplies = [];

// for (let i = 1; i <= 10; i++) {
//   multiplies.push(5 * i);
// }

// i = 0;

// while (i < 10) {
//   i++;
//   multiplies.push(5 * i);
// }

// console.log(multiplies);

//* 8. Usa un bucle para invertir una cadena de texto

//? console.log(myString.split("").reverse().join(""));

let myString = "Hello World";
let reverseChain = "";

// for (let i = myString.length - 1; i >= 0; i--) {
//   reverseChain += myString[i];
// }

// let myString = "Hello World";
// let reverseChain = [];
// let j = 0;

// for (let i = myString.length - 1; i >= 0; i--) {
//   reverseChain[j] = myString[i];
//   j++;
// }

// console.log(reverseChain.join(""));

// i = myString.length - 1;

// while (i >= 0) {
//   reverseChain += myString[i];
//   i--;
// }

// console.log(reverseChain);

//* 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let num1 = 0,
  num2 = 1;
total = 0;

// for (let i = 0; i < 10; i++) {
//   console.log(num1);

//   total = num1 + num2;
//   num1 = num2;
//   num2 = total;
// }

// i = 0;

// while (i < 10) {
//   console.log(num1);

//   total = num1 + num2;
//   num1 = num2;
//   num2 = total;

//   i++;
// }

//* 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

myNumbers = [12, 3, 5, 58, 10, 17];
let newArray = [];

// for (let i = 0; i < myNumbers.length; i++) {
//   if (myNumbers[i] > 10) {
//     newArray.push(myNumbers[i]);
//   }
// }

// i = 0;

// while (i < myNumbers.length) {
//   if (myNumbers[i] > 10) {
//     newArray.push(myNumbers[i]);
//   }
//   i++;
// }

// console.log(newArray);
