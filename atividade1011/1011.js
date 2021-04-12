const lines = prompt ('Digite os valores de entrada').split(' ');

const raio = lines[0];
const formula = (4/3.0 * 3.14159 * Math.pow(raio, 3));

console.log(`VOLUME = ${formula.toFixed(3)}`);