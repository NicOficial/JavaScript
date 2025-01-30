// 1. Escribe un comentario en una línea

// Este es un comentario en una linea

// 2. Escribe un comentario en varias líneas

/* Este es un comentario
en varias lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Hola";
let myNumber = 1;
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;
let mySymbol = Symbol("simbolo");
let myBigInt = BigInt(4555634554365415364365);

// 4. Imprime por consola el valor de todas las variables

console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Adios";
myNumber = 2;
myBoolean = false;
myUndefined = null;
myNull = undefined;
mySymbol = Symbol("otro simbolo");
myBigInt = BigInt(4555634554365415364366);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 1;
myNumber = "Hola";
myBoolean = 4;
myUndefined = "definido";
myNull = 0;
mySymbol = 1;
myBigInt = "numero";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myStringConst = "Hola";
const myNumberConst = 1;
const myBooleanConst = true;
const myUndefinedConst = undefined;
const myNullConst = null;
const mySymbolConst = Symbol("simbolo");
const myBigIntConst = BigInt(4555634554365415364365);

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*
myStringConst = "Adios";
myNumberConst = 2;
myBooleanConst = false;
myUndefinedConst = null;
myNullConst = undefined;
mySymbolConst = Symbol("otro simbolo");
myBigIntConst = BigInt(4555634554365415364366);
*/
