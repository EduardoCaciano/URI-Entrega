const lines = prompt ('Digite os valores de entrada').split(' ');

const inteiro1 = Number(lines[0]);
const inteiro2 = Number(lines[1]);
const doisDecimais = Number(lines[2]);

const soma = (doisDecimais * inteiro2);

console.log(`NUMBER = ${inteiro1}`);
console.log(`SALARY = U$ ${soma.toFixed(2)}`);