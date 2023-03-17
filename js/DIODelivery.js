// Desafio
// A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de entrega, fixa de R$ 5.00.

// Entrada
// Entrada deverá receber os valores que preencherão o objeto JSON , ele deverá conter as seguintes propriedades:

// cliente: uma string com o nome do cliente.
// endereco: uma string com o endereço de entrega.
// quantidade de itens: indica a quantidade de itens que devem ser lidos no array a seguir.
// itens: um array de objetos que representam um item do pedido, com as seguintes propriedades:
// nome (string)
// preço (number)
// Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.


// Saída
// Deverá retornar uma mensagem (string) que informa o nome do cliente, o endereço de entrega e o total do pedido, da seguinte maneira: 

// Pedido: ${pedido.cliente}
// Endereço de entrega: ${pedido.endereco}
// Total: R$ ${totalCalculado}

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: gets(),
  endereco: gets(),
  itens: [],
  taxaEntrega: 5.0
}

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
const quantidadeItens = parseInt(gets());
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = gets()
  const precoItem = parseFloat(gets())
  pedido.itens.push({ nome: nomeItem, preco: precoItem })
}

let totalPedido = 0
//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
pedido.itens.forEach(item => {
  totalPedido += item.preco
})

totalPedido += pedido.taxaEntrega
//TODO: Imprima a saída no padrão descrito neste desafio.
console.log(`Pedido: ${pedido.cliente}`)
console.log(`Endereco de entrega: ${pedido.endereco}`)
console.log(`Total: R$ ${totalPedido.toFixed(2)}`)