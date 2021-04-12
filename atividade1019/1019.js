const lines = prompt ('Digite os valores de entrada').split(' ');

const digito = Number(lines[0]);

const horas = (segundos / 3600);
const minutos = (segundos / 60);
const segundos = (minutos / 60);

console.log(`${horas}:${minutos}:${segundos}`);
