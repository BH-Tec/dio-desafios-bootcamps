// Desafio
// Papaleguas é um corredor exemplar, sua especialidade é a prova dos 100 metros rasos. Diariamente, ele treina para realizar as provas no menor tempo possível e se tornar recordista mundial na categoria. Pode se perceber que, dependendo da quantidade de tentativas, o seu desempenho melhora ou piora. Diante disso, ele te desafia para calcular a tentativa mais rápida de cada treino diário.

// Entrada
// A entrada é composta por vários casos de teste. A primeira linha de cada caso de teste contém um número inteiro T (2 <= T <= 99) relativo ao número de tentativas de um dia. As T linhas seguintes contêm um número real Ti (9 <= Ti <= 11) relativo ao tempo, em segundos, da i-ésima tentativa do treino. A entrada termina com fim de arquivo.

// Saída
// Para cada caso de teste de entrada do seu programa, você deve imprimir um número real contendo o tempo da tentativa mais rápida de cada treino.
let input = gets()
let qtdEntradas = parseInt(input)
let melhor = 999

for (let i = 0; i < qtdEntradas; i++) {
  input = gets()
  let tempo = parseFloat(input)
  if (tempo < melhor) melhor = tempo
}
print(melhor)

