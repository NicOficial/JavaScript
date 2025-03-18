//? Sintaxis

let myPerson = {
  name: "Carlos",
  age: 30,
  country: "Argentina",
};

//? Acceder a las propiedades

//* Con punto
console.log(myPerson.name);
console.log(myPerson.age);

//* Con corchetes
console.log(myPerson["name"]);
console.log(myPerson["age"]);

//? Agregar propiedades

myPerson.email = "neque.primo@gmail";

//? Modificar las propiedades

myPerson.name = "Nicolas";
myPerson.age = "18"; //* Cambio a string

console.log(myPerson);

//? Eliminar propiedades

delete myPerson.country;

//? Metodos (Funciones)

let myPerson2 = {
  name: "Nicolas",
  age: 18,
  country: "Argentina",
  walk: function () {
    console.log("This person is walking");
  },
};

myPerson2.walk();

//? Anidacion de objetos

let myPerson3 = {
  name: "Nicolas",
  age: 18,
  country: "Argentina",
  walk: function () {
    console.log("This person is walking");
  },
  car: {
    color: "grey",
    nSeats: 4,
    drive: function () {
      console.log(`This ${this.color} car is being driven`);
    },
  },
};

myPerson3.car.drive();

//? Igualdad de Objetos

console.log(myPerson2 == myPerson3); //* False
console.log(myPerson2 === myPerson3); //* False

console.log(myPerson2.name == myPerson3.name); //* True

//? Iterar Objetos

for (let key in myPerson3) {
  console.log(key + ": " + myPerson3[key]);
}

//? Funciones como Objetos / Constructor
//! No es una buena pratica

function Person(name = "", age = 0, city = "", email = "") {
  this.name = name;
  this.age = age;
  this.city = city;
  this.email = email;
}

let myPerson4 = new Person("Paola", 47, "Haedo", "paola@gmail");

console.log(myPerson4);

for (let key in myPerson4) {
  console.log(key + ": " + myPerson4[key]);
}
