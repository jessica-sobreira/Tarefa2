/**8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.**/

let vendas = [
    { cliente: "João", total: 100 },
    { cliente: "Maria", total: 50 },
    { cliente: "Maria", total: 150 },
    { cliente: "Joana", total: 200 },
    { cliente: "João", total: 100 },
]

let totalPorCliente = vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
}, {});

console.log(totalPorCliente);