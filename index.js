const dani = [
  "nedjelja",
  "ponedjeljak",
  "utorak",
  "srijeda",
  "četvrtak",
  "petak",
  "subota"
];

const danas = new Date();
const indeks = danas.getDay();

const nazivDana = dani[indeks];
const jeNeradni = indeks === 0 || indeks === 6;

console.log(`Danas je ${nazivDana}.`);

if(jeNeradni) {
  console.log("Riječ je o neradnom danu.");
} else {
  console.log("Riječ je o radnom danu.");
}