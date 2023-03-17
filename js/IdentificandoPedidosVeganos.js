// Desafio
// O objetivo deste programa é ajudar a equipe do Restaurante Veggieworld a identificar rapidamente os pedidos veganos e não veganos e informar as calorias de cada prato definido pelo cliente. O programa deve solicitar ao usuário o número de pedidos que serão feitos e, em seguida, pedir informações sobre cada pedido, incluindo se o prato é vegano ou não (usando as opções "s" para sim e "n" para não) e a quantidade de calorias. Ao final, o programa deve exibir uma lista de todos os pedidos com suas informações correspondentes.

// Entrada
// Um inteiro n, que representa o número de pedidos que o usuário deseja fazer.
// Para cada pedido, o usuário deve inserir:
// O nome do prato;
// A quantidade de calorias do prato;
// Se o prato é vegano ou não (usando as opções "s" para sim e "n" para não).
// Saída
// O programa deve exibir uma lista de todos os pedidos com suas informações correspondentes, incluindo o nome do prato, se é vegano ou não, e a quantidade de calorias, no seguinte formato:

// Pedido X: NOME_DO_PRATO (EH_VEGANO?) - YYY calorias, onde "X" é o número do pedido, "NOME_DO_PRATO" é o nome do prato, "EH_VEGADO?" indica se o prato é vegano (escrever "Vegano" ou "Nao-vegano"), e "YYY" é a quantidade de calorias do prato.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const numPedidos = parseInt(gets())

for (let i = 1; i <= numPedidos; i++) {
  const prato = gets()
  const calorias = parseInt(gets())
  //Explicação: atribui "true" se o valor lido via gets() for estritamente igual a 's'.
  //Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators
  const ehVegano = gets().toLowerCase() === 's'

  //TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
  const mensagem = `Pedido ${i}: ${prato} (${ehVegano ? 'Vegano' : 'Não-vegano'}) - ${calorias} calorias`
  console.log(mensagem)
}