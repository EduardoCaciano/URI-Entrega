const lines = prompt ('Digite os valores de entrada').split(' ');

const [A, B, C, D] = lines.map(Number);

const media = (A * B - C * D);

console.log (`DIFERENCA = ${media}`);