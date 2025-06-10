let fahrenheit = prompt("Digite uma temperatura em Fahrenheit: ");

fahrenheit = parseFloat(fahrenheit);

let celsius = (fahrenheit - 32) * 5 / 9;

alert("A temperatura em Celsius é: " + celsius.toFixed(2) + "C");
