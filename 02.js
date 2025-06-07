/**2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.**/

const prompt = require("prompt-sync")();

let num = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

while (true) {
    let palpite = parseInt(prompt("Digite um número entre 1 e 100: "));
    tentativas++;

    if (palpite < num) {
        console.log("Mais alto!");
    } else if (palpite > num) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
        break;
    }
}       

console.log(`O número era ${num}`);

