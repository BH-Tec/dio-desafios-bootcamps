// Desafio
// Seu José possui uma lista de entregas das suas mercadorias e cada uma delas possui um número de identificação. As entregas mais urgentes são as que possuem o número de identificação PAR. Porém, seu José é muito atarefado e pediu sua ajuda para criar um programa que, de acordo com uma lista, mostrasse apenas as entregas urgentes (pares). Utilizando o seu conhecimento sobre Arrays, uma estrutura de dados que armazena uma coleção de dados em um bloco de memória, crie um programa que, dado a lista: {2, 3, 5, 7, 11, 13, 18, 34}, retorne como resultado apenas os números pares dessa array.

// Entrada
// A entrada consiste em um Array de números inteiros positivos. ([2, 3, 5, 7, 11, 13, 18, 34])

// Saída
// A saída do desafio equivale aos números pares do Array.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "array.length": verifica o tamanho de um array;

var array = [2, 3, 5, 7, 11, 13, 18, 34];

//TODO: Complete o laço de repetição:
//TODO: Agora crie uma condição que verifique o ARRAY e imprima APENAS os números pares.
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    print(array[i]);
  }
}