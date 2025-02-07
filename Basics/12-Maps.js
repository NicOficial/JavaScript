//? Declaracion

let myMap = new Map(); //* Crear un map vacío
console.log(myMap);

//? Inicialización

myMap = new Map([
  ["name", "nicolas"],
  ["age", 18],
  ["country", "Argentina"],
  ["email", "neque.primo@gmail.com"],
]);

console.log(myMap);

//? Métodos

//* set(key, value)

myMap.set("twitter", "@nequeprimo"); //* Agrega un nuevo elemento al map
myMap.set("country", "España"); //* Actualiza el valor de la key country

console.log(myMap);

//* get(key)

console.log(myMap.get("email")); //* Obtiene el valor de la key email

//* has(key)

console.log(myMap.has("surname")); //* Verifica si existe la key surname

//* delete(key)

myMap.delete("twitter"); //* Elimina la key twitter
console.log(myMap);

//* keys(), values() y entries()

console.log(myMap.keys()); //* Devuelve un objeto iterable con las keys
console.log(myMap.values()); //* Devuelve un objeto iterable con los valores
console.log(myMap.entries()); //* Devuelve un objeto iterable con los elementos

//* size

console.log(myMap.size); //* Devuelve la cantidad de elementos del map

//* clear()

myMap.clear(); //* Elimina todos los elementos del map
console.log(myMap);
