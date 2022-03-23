function apply(num, f) {
  return f(num);
}

function double(num) {
  return 2 * num;
}
//llamando a la funcion por medio del nombre o identificador
console.log(apply(5, double));

//ejecutando un funcion anonima
console.log(
  apply(5, function (num) {
    return 2 * num;
  })
);
// ejecutando arrow funtion
console.log(
  apply(5, (num) => {
    return 2 * num;
  })
);
