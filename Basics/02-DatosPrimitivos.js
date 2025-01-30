// Stirngs (cadenas de texto)
let nombre = "Juan";
const apellido = "Perez";

// Integers y Floats
let edad = 30; // Entero
const precio = 200.5; // Decimal

// Booleanos
let tieneHijos = false;
const estaCasado = true;

// Undefined (varible no definida)
let variableUndefined;

// Null (variable vacia)
let variableNull = null;

// Symbol
let simbolo = Symbol("mi simbolo");

// BigInt
let numeroGrande = BigInt(1004865341653841631465316321456321464);
let numeroGrande2 = 1004865341653841631465316321456321464n;

// Mostrar tipos de datos
console.log(typeof nombre); // string
console.log(typeof edad); // number
console.log(typeof tieneHijos); // boolean
console.log(typeof variableUndefined); // undefined
console.log(typeof variableNull); // object (null es un objeto)
console.log(typeof simbolo); // symbol
console.log(typeof numeroGrande); // bigint
