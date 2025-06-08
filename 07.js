/**7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.**/

let prudutos =[
    {nome: "Notebook", preco: 4999.99},
    {nome: "Smartphone", preco: 2999.99},
    {nome: "Tablet", preco: 1999.99},
    {nome: "Monitor", preco: 799.99},
    {nome: "Mouse", preco: 99.99},
    {nome: "Teclado", preco: 199.99},
    {nome: "Headset", preco: 299.99},
    {nome: "Mousepad", preco: 49.99},
    {nome: "Cadeira", preco: 299.99},
    {nome: "Cadeira Gamer", preco: 499.99},
]


let ordenados = prudutos.slice().sort((a, b) => a.preco - b.preco).map(produto => produto.nome);

console.log(ordenados);

