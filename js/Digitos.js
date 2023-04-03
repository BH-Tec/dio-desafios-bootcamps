// Desafio
// Dados dois números inteiros, A e B, quantos dígitos tem nm ?

// Exemplos:

// 2 e 10 - 210 = 1024 - 4 dígitos

// 3 e 9 - 39 = 19683 - 5 dígitos

// Entrada
// A primeira linha tem um número inteiro E, representando a quantidade de casos de teste. As E linhas seguintes contém dois números inteiros A e B (1 <= A, B <= 100).

// Saída
// Para cada caso de teste de entrada do seu programa, você deve imprimir um número inteiro contendo a quantidade de dígitos do resultado da potência calculada no respectivo caso de teste.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.
let C = parseInt(gets())

for (let i = 0; i < C; i++) {
  var input = gets().split(" ")
  let N = parseInt(input[0])
  let M = parseInt(input[1])
  let numDigits = Math.floor(Math.log10(Math.pow(N, M))) + 1
  print(numDigits)
}
