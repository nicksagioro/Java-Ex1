let distancia = prompt("Digite a distância percorrida (em km): ");
let combustivel = prompt("Digite o total de combustível consumido (em litros): ");

distancia = parseFloat(distancia);
combustivel = parseFloat(combustivel);

let consumoMedio =  distancia / combustivel;

alert("O consumo médio é de: " + consumoMedio.toFixed(2) + " km/l");