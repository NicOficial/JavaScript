// 1. Concatena dos cadenas de texto

let myName = "Nico";
let myAge = 18;

let phrase = "Hola bienvenido " + myName + ", tienes " + myAge + " años";
console.log(phrase);

// 2. Muestra la longitud de una cadena de texto

console.log(phrase.length);

// 3. Muestra el primer y último carácter de un string

console.log(phrase[0]);
console.log(phrase[38]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let phrase2 = `Hola soy
 una segunda
	frase`;

// 6. Interpola el valor de una variable en un string

console.log(`Esto es una frase interpolada: ${phrase}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(phrase.replace(/ /g, "-")); // Expresión regular
console.log(phrase.replaceAll(" ", "-")); // Método

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(phrase.includes("Bienvenido")); // false
console.log(phrase.includes("bienvenido")); // true

// 9. Comprueba si dos strings son iguales

console.log(phrase == phrase2); // false

// 10. Comprueba si dos strings tienen la misma longitud

console.log(phrase.length == phrase2.length); // false
