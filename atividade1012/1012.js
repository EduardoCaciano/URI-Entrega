const lines = prompt ('Digite os valores de entrada').split(' ');

const [A, B, C] = input.split(" ").map(item => parseFloat(item));

const letraA = (A * C) / 2.0;
const letraB = (3.14159 * Math.pow(C, 2));
const letraC = (((A + B) * C) / 2.0);
const letraD = (B * B);
const letraE = (A * B);

console.log(`TRIANGULO: ${letraA.toFixed(3)}`);
console.log(`CIRCULO: ${letraB.toFixed(3)}`);
console.log(`TRAPEZIO: ${letraC.toFixed(3)}`);
console.log(`QUADRADO: ${letraD.toFixed(3)}`);
console.log(`RETANGULO: ${letraE.toFixed(3)}`);