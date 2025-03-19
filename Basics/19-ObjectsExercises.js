// 1. Crea un objeto con 3 propiedades

let myAnimal = {
  name: "Simona",
  race: "dog",
  height: 30,
};

// 2. Accede y muestra su valor

console.log(myAnimal);

// 3. Agrega una nueva propiedad

myAnimal.color = "white";

// 4. Elimina una de las 3 primeras propiedades

delete myAnimal.height;

// 5. Agrega una función e invócala

myAnimal.eat = function () {
  console.log("The dog is eating");
};

myAnimal.eat();

// 6. Itera las propiedades del objeto

for (let key in myAnimal) {
  console.log(key + ": " + myAnimal[key]);
}

// 7. Crea un objeto anidado

myAnimal.toy = {
  material: "rope",
  long: 15,
  durability: 100,
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(myAnimal.toy);

// 9. Comprueba si los dos objetos creados son iguales

console.log(myAnimal === myAnimal.toy); //* False

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(myAnimal.name == myAnimal.toy.material); //* False
