/**3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.**/

const prompt = require("prompt-sync")();

let frase = prompt("Digite uma frase: ");
let palavras = frase.split(" ");
let palavrasUnicas = [];

for (let i = 0; i < palavras.length; i++) {
    if (!palavrasUnicas.includes(palavras[i])) {
        palavrasUnicas.push(palavras[i]);
    }
}

console.log(palavrasUnicas);
