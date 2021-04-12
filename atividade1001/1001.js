const lines = prompt ('Digite os valores de entrada').split(' ');

const [a, b] = lines.map(Number);
//            ou
// const a = Number(lines[0]);
// const b = Number(lines[1]);

const x = a + b;

console.log (`x = ${x}`);