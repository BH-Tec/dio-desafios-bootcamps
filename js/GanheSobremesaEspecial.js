// Desafio
// Crie um programa que informe ao usuário se ele pode receber um brinde especial de acordo com o valor total do pedido. Se o valor total do pedido for maior ou igual a R$ 50.00, o usuário receberá uma sobremesa grátis. Caso contrário, o usuário não receberá nenhum brinde.

// Entrada
// A entrada deverá receber o valor total do pedido em uma variável numérica:

// valorPedido: o valor do pedido.
// Saída
// Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não:

// Se valorPedido >= 50, a mensagem deve ser:
// Parabéns, você ganhou uma sobremesa grátis!
// Caso contrário, a mensagem deve ser:
// Que pena, você não ganhou nenhum brinde especial.
// Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const valorPedido = parseInt(gets())

//TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.
if (valorPedido >= 50.00) {
  // Usando interpolação de string para formatar a saída
  console.log(`Parabens, você ganhou uma sobremesa gratis!`)
} else {
  // Usando interpolação de string para formatar a saída
  console.log(`Que pena, você nao ganhou nenhum brinde especial.`)
}