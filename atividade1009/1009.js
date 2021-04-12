const lines = prompt ('Digite os valores de entrada').split(' ');

const nome = lines[0];
const A = Number(lines[1]);
const B = Number(lines[2]);
const porcentagem = (B * 0.15);
const total = (A + porcentagem);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
