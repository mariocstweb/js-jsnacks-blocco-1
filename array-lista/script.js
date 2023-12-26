console.log("js ok");

// Creo un array con i nomi dei frutti

const fruitList = [
  "banana",
  "mela",
  "pera",
  "ciliegia",
  "arancia",
  "mandarino",
  "cocomero",
  "limone",
  "fragola",
];

// console.log(fruitList);

const newFruit = "pesca";
fruitList.push(newFruit);

console.log(fruitList);

for (let i = 0; i < fruitList.length; i++) {
  console.log(fruitList[i]);
}

let searchCocomero = "cocomero";

let trovato = false;

for (let i = 0; i < fruitList.length; i++) {
  if (fruitList[i] === searchCocomero) {
    trovato = true;
  }
}

if (trovato) {
  console.log("Trovato! Devo solo preparare il cocktail.");
} else {
  console.log("Oh no, devo uscire a comprare il cocomero!");
}
