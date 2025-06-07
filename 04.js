/**4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.**/

function fatorial(n) {
    if (n < 0) {
        console.log("Ops! Não é possível calcular o fatorial de um número negativo.");
        return NaN;
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log("Fatorial de 5:", fatorial(5));   
console.log("Fatorial de 0:", fatorial(0));   
console.log("Fatorial de 3:", fatorial(3));   
console.log("Fatorial de 1:", fatorial(1));   
console.log("Fatorial de -2:", fatorial(-2)); 