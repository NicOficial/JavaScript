//? Declaracion de Sets

let mySet = new Set(); //* Crear un set vacío
let mySet2 = {}; //! No es un set

console.log(mySet);

//? Inicialización de un set
//* Con parentesis y corchetes
mySet = new Set(["neque", false, "HOla", 4, true]); //* Set con elementos

console.log(mySet);

//? Metodos comunes

mySet.add("Nuevo elemento"); //* Añadir un elemento al set

mySet.delete("Nuevo elemento"); //* Eliminar un elemento del set

mySet.has("Nuevo elemento"); //* Verificar si un elemento existe en el set

mySet.size; //* Tamaño del set

//? Convertir un set a un array
let myArray = Array.from(mySet);

//? Convertir un array a un set
mySet = new Set(myArray);

//? No admite elementos duplicados
mySet.add("neque");
mySet.add("neque");

console.log(mySet);
