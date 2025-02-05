// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Nico",
  mySecondName = "Nico";

if (myName == mySecondName) {
  console.log("Bienvenido Nico");
} else {
  console.log("Tu no eres Nico");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let myPassword = 123;

if (myName == "Nico" && myPassword == 123) {
  console.log("Bienvenido devuelta");
} else {
  console.log("Nombre o contraseña incorrecta");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let myNum = 0;

if (myNum < 0) {
  console.log("Tu numero es negativo");
} else if (myNum == 0) {
  console.log("Tu numero es cero");
} else {
  console.log("Tu numero es positivo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let myAge = 17;

if (myAge >= 18) {
  console.log("Puedes votar");
} else if (18 - myAge == 1) {
  console.log("Te falta " + (18 - myAge) + " año para poder votar");
} else {
  console.log("Te faltan " + (18 - myAge) + " años para poder votar");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

let responsable = myAge >= 18 ? "adulto" : "menor";

console.log("Tu eres " + responsable);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1;

if (mes == 1 || mes == 2 || mes == 12) {
  console.log("Verano");
} else if (mes == 3 || mes == 4 || mes == 5) {
  console.log("Otoño");
} else if (mes == 6 || mes == 7 || mes == 8) {
  console.log("Invierno");
} else if (mes == 9 || mes == 10 || mes == 11) {
  console.log("Primavera");
} else {
  console.log("Porfavor seleccione un numero valido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch

switch (mes) {
  case 1:
    console.log("31 días");
    break;
  case 2:
    console.log("28 días");
    break;
  case 3:
    console.log("31 días");
    break;
  case 4:
    console.log("30 días");
    break;
  default:
    console.log("Porfavor seleccione un numero valido");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 1;

switch (idioma) {
  case 1:
    console.log("Hi everyone");
    break;
  case 2:
    console.log("Hola a todos");
    break;
  case 3:
    console.log("Ciao a tutti");
    break;
  case 4:
    console.log("Bonjour tout le monde");
    break;
  default:
    console.log("Porfavor seleccione un numero valido");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
  case 1:
    console.log("Verano");
    break;
  case 2:
    console.log("Otoño");
    break;
  case 3:
    console.log("Invierno");
    break;
  case 4:
    console.log("Primavera");
    break;
  default:
    console.log("Porfavor seleccione un numero valido");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
