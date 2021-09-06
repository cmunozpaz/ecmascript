//Parametros por defecto antes
function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "23", "CO");

//Tamplate literal

//antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea antes

let lorem =
  "Quier crar una frace epica \n" + "otra frace epica que necesitamos.";

//Templae literals ``
// es6
let lorem2 = `otra frace epica que nesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

//Antes
//Estructuración de elementos
let persona = {
  name: "oscar",
  age: 35,
  country: "GT",
};

console.log(persona.name, persona.age);

//es6
let { name, age, country } = persona;

console.log(name, age, country);

//operador de propagación
//antes

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

//es6
let education = ["Christian", ...team1, ...team2];

console.log(education);

//las variables
// var es global
// let solo en el scop donde esta declarada

{
  var globalVar = "Global let";
}

//variable local soloen el scop
{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//trabajando con const que es una constante
const a = "b";
