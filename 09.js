/**9. Conversão Entre Formatos
Escreva duas funções:

○ paresParaObjeto(pares) recebe um array de pares [ [chave,
valor], ... ] e retorna o objeto equivalente.
○ objetoParaPares(obj) faz o inverso, retornando um array de
pares.**/

function paresParaObjeto(pares){
    let obj = {};
    for (let i = 0; i < pares.length; i++) {
        obj[pares[i][0]] = pares[i][1];
    }
    return obj;

}

function objetoParaPares(obj){
    let pares = [];
    for (let chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

console.log(paresParaObjeto([[1, 2], [3, 4], [5, 6]]));
console.log(objetoParaPares({a: 1, b: 2, c: 3}));

