const lines = prompt ('Digite os valores de entrada').split(' ');

const linhas = input.split("\n");

const [peca1, qtdPeca, valorUnidadePeca] = linhas.shift().split(" ");
const [peca2 ,qntPeca2, valorUnidadePeca2] = linhas.shift().split(" ");

const valorTotal1 = (qtdPeca * valorUnidadePeca);
const valorTotal2 = (qntPeca2 * valorUnidadePeca2);

const total = (valorTotal1 + valorTotal2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);