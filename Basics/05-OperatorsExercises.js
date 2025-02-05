// 1. Crea una variable para cada operación aritmética

let suma = 10 + 2; // 12
let resta = 5 - 3; // 2
let multiplicacion = 4 * 3; // 12
let divicion = 8 / 2; // 4
let modulo = 10 % 3; // 1
let elevado = 2 ** 3; // 8

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 2; // 14
resta -= 1; // 1
multiplicacion *= 1.5; // 18
divicion /= 2; // 2
modulo %= 2; // 1
elevado **= 2; // 64

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10 > 5);
console.log(10 >= 9);
console.log(10 < 15);
console.log(10 == 10);
console.log(10 != 5);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(10 < 5);
console.log(10 <= 9);
console.log(10 > 15);
console.log(10 == 11);
console.log(10 != 10);

// 5. Utiliza el operador lógico and

console.log(10 >= 5 && 10 >= 20);

// 6. Utiliza el operador lógico or

console.log(10 > 5 || 10 < 8);

// 7. Combina ambos operadores lógicos

console.log((a >= 5 && b < 10) || c == true);

// 8. Añade alguna negación

console.log(!(20 < a));

// 9. Utiliza el operador ternario

let isUpperCase = true;

isUpperCase ? console.log("Las mayusculas estan activadas") : console.log("");

// 10. Combina operadores aritméticos, de comparáción y lógicas

let noLoSe = 10;
let siLoSe = 20;

let bruto = noLoSe + siLoSe; // 30
let descuento = 0.25;

let total = bruto - bruto * descuento; // 30 - (30 * 0.25) == 30 - 7.5 === 22.5

console.log("Con un descuento del " + bruto);

let menorDe30 = false;

if (total < 30) {
  menorDe30 = true;
}

menorDe30
  ? console.log("Su compra fue de menos de 30 pesos :) y fue de " + total)
  : console.log("Su compra ha superado los 30 pesos :( y fue de " + total);
