// Desafio
// O objetivo desse desafio é criar um programa em JavaScript que compare dois objetos JSON de pedidos de entrega e determine se eles possuem ou não as mesmas informações. O programa deve criar dois objetos JSON contendo o nome do cliente, além do nome e preço de um item selecionado.

// Entrada
// O programa receberá os dados necessários para criar dois Clientes com seu respectivo Item de Pedido para comparação:

// Cliente 1:
// Nome (string): nome do primeiro cliente.
// Nome do Item (string): nome do item de pedido selecionado para o primeiro cliente.
// Preço do Item (number): preço do item de pedido selecionado para o primeiro cliente.
// Cliente 2:
// Nome (string): nome do segundo cliente.
// Nome do Item (string): nome do item de pedido selecionado para o segundo cliente.
// Preço do Item (number): preço do item de pedido selecionado para o segundo cliente.
// Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

// Saída
// Se todos os dados dos clientes forem estritamente iguais, o programa deverá retornar a mensagem:
// Os pedidos são iguais

// Caso contrário, o programa deverá retornar a mensagem:
// Os pedidos são diferentes

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// JSON do Cliente 1
const cliente1 = { 
  nome: gets(), 
  item: gets(), 
  preco: parseFloat(gets())
};

// JSON do Cliente 2
const cliente2 = { 
  nome: gets(), 
  item: gets(), 
  preco: parseFloat(gets()) 
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.
const cliente1Str = JSON.stringify(cliente1)
const cliente2Str = JSON.stringify(cliente2)

//TODO: Imprimir a saída conforme o enunciado deste desafio.
if(cliente1Str === cliente2Str) {
print("Os pedidos são iguais")
} else {
print("Os pedidos são diferentes")
}