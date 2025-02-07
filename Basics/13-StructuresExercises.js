// 1. Crea un array que almacene cinco animales

let myAnimals = ["gato", "perro", "loro", "pez", "tortuga"];

// 2. Añade dos más. Uno al principio y otro al final

myAnimals.push("raton");
myAnimals.unshift("lagartija");

// 3. Elimina el que se encuentra en tercera posición

myAnimals.splice(2, 1);

// 4. Crea un set que almacene cinco libros

let myLibrary = new Set(["libro1", "libro2", "libro3", "libro4", "libro5"]);

// 5. Añade dos más. Uno de ellos repetido

myLibrary.add("libro6");
myLibrary.add("libro1");

// 6. Elimina uno concreto a tu elección

myLibrary.delete("libro4");

// 7. Crea un mapa que asocie el número del mes a su nombre

monthsOfTheYear = new Map([
  [1, "January"],
  [2, "February"],
  [3, "March"],
  [4, "April"],
  [5, "May"],
  [6, "June"],
  [7, "July"],
  [8, "August"],
  [9, "September"],
  [10, "October"],
  [11, "November"],
  [12, "December"],
]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(monthsOfTheYear.has(5));
console.log(monthsOfTheYear.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let monthsOfSummer = [
  monthsOfTheYear.get(12),
  monthsOfTheYear.get(1),
  monthsOfTheYear.get(2),
];
monthsOfTheYear.set("summerMonths", monthsOfSummer);

//? console.log(monthsOfSummer);
//? console.log(monthsOfTheYear);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["a", "b", "c", "d", "e"];
let mySet = new Set(myArray);
let myMap = new Map([["mySet", mySet]]);

console.log(myArray);
console.log(mySet);
console.log(myMap);
