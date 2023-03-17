// Desafio
// Você foi contratado para desenvolver um sistema que armazena informações dos pedidos de comida online realizados por um cliente. O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado.

// Entrada
// A entrada é composta por:

// Uma linha com um número inteiro n representando a quantidade de pedidos que o usuário deseja inserir;
// n linhas, cada uma contendo uma string com o nome do pedido e um valor em ponto flutuante separados por espaço. O nome do pedido não contém espaços em branco;
// Uma linha contendo o cupom de desconto escolhido (10% ou 20%).
// Saída
// O programa deve exibir uma única linha contendo o valor total de todos os pedidos com o desconto aplicado, no seguinte formato:

// Valor total: XX.YY, onde "XX.YY" é a soma de todos os pedidos com desconto em formato de duas casas decimais após a vírgula.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
function calcularValorTotal(n, pedidos, cupom) {
  let total = 0
  for (let i = 0; i < n; i++) {
    //Explicação: Aplica o conceito de destructuring para atribuição do nome e valor.
    //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let [nome, valor] = pedidos[i].split(' ')
    valor = parseFloat(valor)
    total += valor
  }
  
  //TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
  if (cupom === '10%') {
    total *= 0.9
  } else if (cupom === '20%') {
    total *= 0.8
  }
  return total.toFixed(2)
}

//Recupera os valores de entrada, criando um array para os pedidos:
const n = parseInt(gets())
const pedidos = []
for (let i = 0; i < n; i++) {
  pedidos.push(gets())
}
const cupom = gets()

//TODO: Analisar e completar a função "calcularValorTotal", invocando-a para obtenção do total.
const valorTotal = calcularValorTotal(n, pedidos, cupom)
//TODO: Imprimir o valor total obtido de acordo com o padrão solicitado neste desafio.
print(`Valor total: ${valorTotal}`)