const dollars = ["32$", "15$", "12$", "17$", "20$"];

//Map -> un objeto a otro objeto
//forma antigua
let prices = [];
for (let i = 0; i < dollars.length; i++) {
  //console.log(Number(dollars[i].slice(0, dollars[i].length - 1)));
  prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}
//console.log(prices);

//otra manual de hacer un map
prices = [];
for (const dollar of dollars) {
  prices.push(Number(dollar.slice(0, dollar.length - 1)));
}
//console.log(prices);

//Forma con MAP
prices = dollars.map((dollar) => Number(dollar.slice(0, dollar.length - 1)));
//console.log(prices);

//FILTER
//filtrado manual
let expensive = [];
for (const price of prices) {
  if (price >= 20) {
    expensive.push(price);
  }
}
//console.log(expensive);

expensive = prices.filter((price) => price >= 20);
//console.log(expensive);

//REDUCE
//forma manual
let sum = 0;
for (const price of expensive) {
  sum += price;
}
//console.log(sum);

//forma reduce

sum = expensive.reduce((acum, price) => acum + price);
//console.log(sum);

//DE UNA

sum = dollars
  .map((dollar) => Number(dollar.slice(0, dollar.length - 1)))
  .filter((price) => price >= 20)
  .reduce((acum, price) => acum + price);
console.log(sum);

//funciones anonimas//

function apply(num, f) {
  return f(num);
}

function double(num) {
  return 2 * num;
}
//llamando a la funcion por medio del nombre o identificador
//console.log(apply(5, double));

//ejecutando un funcion anonima
// console.log(
//   apply(5, function (num) {
//     return 2 * num;
//   })
// );
// ejecutando arrow funtion
// console.log(
//   apply(5, (num) => {
//     return 2 * num;
//   })
// );
