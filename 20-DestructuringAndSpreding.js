//* Desestructuracion

let myArray = ["a", "b", "c", "d", "e"];

let myPerson = {
  name: "Carlos",
  age: 30,
  country: "Argentina",
};

//? Desestructuracion de arrays

let [myValue1, myValue2, myValue3, myValue4, myValue5] = myArray;

console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
console.log(myValue5);

let [myValue6 = 0, myValue7 = 0, myValue8 = 0] = myArray; //* Valores por defecto

let [myValue9, , , , myValue10] = myArray; //* Ignorar valores

//? Desestructuracion de objetos
