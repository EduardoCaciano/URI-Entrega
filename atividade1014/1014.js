const lines = prompt ('Digite os valores de entrada').split(' ');

const [distanciaKm, valorCombustivel] = lines.map(Number);

const formula = (distanciaKm / valorCombustivel);

console.log(`${formula.toFixed(3)} km/l`);