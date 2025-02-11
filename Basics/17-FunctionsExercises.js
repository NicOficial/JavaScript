//* NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

//* 1. Crea una función que reciba dos números y devuelva su suma

// function Sum(num1, num2) {
//   let total = num1 + num2;
//   return total;
// }

// console.log(Sum(5, 6));

//* 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// let biggest = 0;

// function Biggest(num) {
//   if (num > biggest) {
//     biggest = num;
//   }
// }

// let myNumbers = [1, 10, 8, 65, 47, 32, 5, 36, 64.4];

// myNumbers.forEach(Biggest);
// console.log(`El numero mas grande es: ${biggest}`);

//* 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// let myString = "Hola esto es una cadena de texto";
// let amountVowels = 0;

// function Vowels(string) {
//   for (let i = 0; i < string.length; i++) {
//     switch (string[i]) {
//       case "A":
//         amountVowels++;
//         break;
//       case "a":
//         amountVowels++;
//         break;
//       case "E":
//         amountVowels++;
//         break;
//       case "e":
//         amountVowels++;
//         break;
//       case "I":
//         amountVowels++;
//         break;
//       case "i":
//         amountVowels++;
//         break;
//       case "O":
//         amountVowels++;
//         break;
//       case "o":
//         amountVowels++;
//         break;
//       case "U":
//         amountVowels++;
//         break;
//       case "u":
//         amountVowels++;
//         break;
//     }
//   }

//   return amountVowels;
// }

// console.log(
//   `La cantidad de vocales en la frase: ${myString}. Es de: ${Vowels(myString)}`,
// );

//* 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// let array = ["Paola", "Nico", "Mariana", "Ezequiel", "Ricardo"];
// let i = 0;
// let mayucs = [];

// function Mayucs(string = "") {
//   mayucs[i] = string.toUpperCase();
//   i++;
// }

// array.forEach(Mayucs);
// console.log(mayucs);

//* 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// function isPrime(num) {
//   if (num == 0 || num == 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(3));

//* 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

//* 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

//* 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

//* 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

//* 10. Crea una función que calcule el factorial de un número dado

//? 11. Crea una función que reciba un array de números y devuelva un nuevo array con los números en orden inverso
