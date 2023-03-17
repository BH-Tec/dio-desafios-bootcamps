// Desafio
// Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.

// Entrada:
// A entrada deve receber os valores abaixo:

// valorHamburguer: o valor unitário de um hambúrguer.
// quantidadeHamburguer: a quantidade de hambúrgueres que o usuário deseja.
// valorBebida: o valor unitário de uma bebida.
// quantidadeBebida: a quantidade de bebidas que o usuário deseja.
// valorPago: o valor pago pelo usuário.
// Saída:
// A saída deve retornar um texto informando o valor total do pedido e a quantidade de troco que será necessário. Por exemplo, se tivermos os seguintes valores de entrada:

// valorHamburguer = 10.00;
// quantidadeHamburguer = 2;
// valorBebida = 5.00;
// quantidadeBebida = 1;
// valorPago = 30.00;
// De acordo com esses valores de entrada, o cálculo do preço final do pedido ficaria assim:

// Valor total dos hambúrgueres: 10.00 * 2 = 20.00
// Valor total da bebida: 5.00 * 1 = 5.00
// Preço total do pedido: 20.00 + 5.00 = 25.00
// Troco necessário: 30.00 - 25.00 = 5.00
// Como o usuário pagou R$ 30.00 e o preço total do pedido ficou em R$ 25.00, o troco necessário é de R$ 5.00. Portanto, a saída esperada para esse exemplo seria:

// O preço final do pedido é R$ 25.00. Seu troco é R$ 5.00.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorHamburguer = parseFloat(gets())
const quantidadeHamburguer = parseInt(gets())
const valorBebida = parseFloat(gets())
const quantidadeBebida = parseInt(gets())
const valorPago = parseFloat(gets())

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
const totalHamburguer = valorHamburguer * quantidadeHamburguer
const totalBebida = valorBebida * quantidadeBebida
const precoTotal = totalHamburguer + totalBebida
//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
const troco = valorPago - precoTotal
//TODO: Imprimir a saída no formato especificado neste desafio.
console.log(`O preço final do pedido é R$ ${precoTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`)