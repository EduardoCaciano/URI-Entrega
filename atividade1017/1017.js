const lines = prompt ('Digite os valores de entrada').split(' ');

const [horas, velocidade] = lines.map(Number);
const formula = ((horas * velocidade) / 12);

console.log(`${formula.toFixed(3)}`);