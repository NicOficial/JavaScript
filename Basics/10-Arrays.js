//? Declaración de un array

let myArray = [1, 2, 3, 4, 5]; // Mas común
let myArray2 = new Array(1, 2); // Menos común

console.log(myArray);
console.log(myArray2);

//? Acceder a un elemento de un array

myArray[0] = 3; // 1
myArray[1]; // 2
myArray[2]; // 3

console.log(myArray);

//? Propiedades y métodos de los arrays

myArray.push(6); // Añade un elemento al final del array
myArray.pop(); // Elimina el último elemento del array y lo devuelve

myArray.shift(); // Elimina el primer elemento del array y lo devuelve
myArray.unshift(0); // Añade un elemento al principio del array

myArray.length; // 5
myArray.clear(); // Elimina todos los elementos del array

myArray.slice(0, 2); // Devuelve un array con los elementos desde la posición 0 hasta la 2
myArray.splice(0, 2); // Elimina los elementos desde la posición 0 hasta la 2
