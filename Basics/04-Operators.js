//* Opreadores

//? Operadores Aritméticos

console.log(2 + 2); // Suma
console.log(5 - 3); // Resta
console.log(2 * 3); // Multiplicación
console.log(10 / 2); // División
console.log(5 % 2); // Módulo
console.log(2 ** 3); // Potencia

let a = 5;
let b = 10;
console.log(a + b); // Suma

console.log(a++); // Incremento
console.log(b--); // Decremento

//? Operadores de asignación

let myVariable = 10;
myVariable += 5;
console.log(myVariable); // 15

myVariable -= 5; //Menos 5
myVariable *= 2; //Por 2
myVariable /= 2; //Entre 2
myVariable %= 2; //Módulo 2
myVariable **= 2; //Potencia 2

//? Operadores de comparación

console.log(a < b); // Menor que
console.log(a > b); // Mayor que
console.log(a <= b); // Menor o igual que
console.log(a >= b); // Mayor o igual que
console.log(a == b); // Igual que
console.log(a != b); // Diferente que
console.log(a === b); // Tipo e igual que
console.log(a !== b); // Tipo y diferente que

//? Operadores lógicos

console.log(5 < 10 && 5 > 2); // AND
console.log(5 < 10 || 5 > 2); // OR
console.log(!true); // NOT

//? Operadores ternarios

const isSunny = false;

isSunny
  ? console.log("Ponte protector para el sol")
  : console.log("Esta nublado");
