//? Concatenation

let myName = "Neque";
let myCity = "Haedo";

let myNameCity = "Bienvenido " + myName + " " + "y tu localidad es " + myCity; // 10 + 5 + 14 + 5

console.log(myNameCity);
console.log(typeof myNameCity);

//? Longitud de una cadena
console.log(myNameCity.length);

//? Acceso a caracteres individuales
console.log(myNameCity[4]);

//? Métodos de cadena
console.log(myNameCity.toUpperCase());
console.log(myNameCity.toLowerCase());
console.log(myNameCity.indexOf("Neque"));
console.log(myNameCity.includes("Haedo"));
console.log(myNameCity.slice(19, 40));
console.log(myNameCity.slice(-21));
console.log(myNameCity.replace("Neque", "Valentin"));

//? Template literals

let mensaje = `Hola este
 es
  un mensaje de prueba`;

//! let mensaje2 = "Hola este es
//! un mensaje de prueba";

console.log(mensaje);
// console.log(mensaje2);

console.log(`Hola mi nombre es ${myName} y soy de ${myCity}`); // Comillas invertidas
