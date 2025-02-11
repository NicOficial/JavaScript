"use strict";

//? Definicion

//* Sin parametros
function myFunction() {
  console.log("Hola función");
}

myFunction();

//* Con parametros
function myFunction1(name) {
  console.log(`Hola ${name}`);
}

myFunction1("Nico");

//? Funcion anónima

let myFunction2 = function (name) {
  console.log(`Hola, ${name}`);
};

myFunction2("neque");

//? Arrow functions

const myFunction3 = (name) => {
  console.log(`Hola, ${name}`);
};

const myFunction4 = (name) => console.log(`Hola, ${name}`);

myFunction3("pao");

// //? Parametros

let total = 0;
function Sum(a) {
  total += a;
}

Sum(10, 5);

//? Retorno de valores

function Mult(a, b) {
  if (a != undefined && b != undefined) {
    return a * b;
  } else {
    return "Porfavor seleccione un numero valido";
  }
}

console.log(Mult(4, 6));

//? Funciones anidadas

function Extern() {
  console.log("Soy la funcion externa");
  function Intern() {
    console.log("Soy la funcion interna");
  }
  Intern();
}

Extern();
//! Intern(); Fuera del scope

//? Funciones de orden superior

function applyFunc(func, param1) {
  func(param1);
}

applyFunc(myFunction1, "Nico");

function applyFunc(func, param1, param2) {
  func(param1, param2);
}

applyFunc(Sum, 5, 20);

//? For each

let myArray = [1, 2, 3, 4, 5];

myArray.forEach(function (value) {
  console.log(value);
});

const fruits = [10, 5, 8, 9];

fruits.forEach(Sum);

console.log(total);
