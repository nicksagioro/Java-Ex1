let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));
let nota4 = parseFloat(prompt("Digite  a quarta nota: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

alert("A média final é: " + media.toFixed(2));