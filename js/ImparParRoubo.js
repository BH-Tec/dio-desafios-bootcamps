// Desafio
// Um novo jogo chamado Ímpar, Par ou Roubo (IPR) está se tornando muito popular. Esse jogo surgiu quando alguns amigos estavam sem conexão com a internet, sem celular, sem computador e bastante desocupados. O jogo está tão popular que irá acontecer um campeonato mundial de IPR e cada país do mundo irá escolher um representante para competir.

// O jogo funciona da seguinte forma: dois jogadores participam, o jogador 1 escolhe entre par ou ímpar, então cada jogador escolhe um inteiro positivo, se a soma desses números for par e o jogador 1 tiver escolhido par então o jogador 1 ganha, se a soma for ímpar o jogador 2 ganha. Caso o jogador 1 tivesse escolhido ímpar ele ganharia se a soma fosse ímpar, caso a soma fosse par o jogador 2 ganharia. Nada de diferente de um jogo de par ou ímpar convencional, correto?

// A diferença do jogo é que o jogador 1 pode roubar e assim assegurar sua vitória independentemente do resultado do jogo de ímpar ou par convencional, já o jogador 2 pode ou não acusar o jogador 1 de roubo. Com essas adições no jogo se o jogador 1 roubar e o jogador 2 acusar o roubo então o jogador 2 ganha, caso o jogador 2 não acuse o roubo e o jogador 1 roubar então o jogador 1 ganha, caso o jogador 2 acuse o roubo, mas o jogador 1 não tiver roubado então o jogador 1 ganha, se o jogador 1 não roubar e o jogador 2 não acusar o roubo o jogo segue como descrito anteriormente.

// Você foi contratado pela OIIPR (Organização Internacional de Ímpar, Par ou Roubo) para desenvolver um programa que dada a escolha do jogador 1 entre par ou ímpar, os números escolhidos como jogada e as ações dos jogadores (roubo/acusação) mostre quem foi o vencedor.

// Entrada
// A entrada consite de uma única linha contendo 5 inteiros: p, j1, j2, r, a. ( 0 ≤ p, r, a ≤ 1 e 1 ≤ j1, j2 ≤ 100).

// p representa a escolha do jogador 1 (se p = 1 então o jogador 1 escolheu par, se p = 0 então o jogador 1 escolheu ímpar). Os valores j1, j2, representam respectivamente o número escolhido pelo jogador 1 e pelo jogador 2. r representa se o jogador 1 roubou (se r = 1 então o jogador 1 roubou, se r = 0 então o jogador 1 não roubou), a representa se o jogador 2 acusou o roubo (se a = 1 então o jogador 2 acusou o jogador 1 de roubo, se a = 0 então ele não acusou o jogador 1 de roubo).

// Saída
// Imprima "Jogador 1 ganha!" se o jogador 1 ganhou ou "Jogador 2 ganha!" se o jogador 2 ganhou (sem as aspas).

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções
let entrada = gets().split(" ")
let p, j1, j2, r, a

p = parseInt(entrada[0])
j1 = parseInt(entrada[1])
j2 = parseInt(entrada[2])
r = parseInt(entrada[3])
a = parseInt(entrada[4])

if (r == 1 && a == 1) {
  // Jogador 2 acusou roubo e jogador 1 roubou
  print("Jogador 2 ganha!")
} else if (r == 1) {
  // Jogador 1 roubou, mas jogador 2 não acusou
  print("Jogador 1 ganha!")
} else if (a == 1) {
  // Jogador 2 acusou, mas jogador 1 não roubou
  print("Jogador 1 ganha!")
} else {
  // Nenhum roubo ou acusação
  let soma = j1 + j2
  if ((p == 1 && soma % 2 == 0) || (p == 0 && soma % 2 == 1)) {
    // Jogador 1 ganha
    print("Jogador 1 ganha!")
  } else {
    // Jogador 2 ganha
    print("Jogador 2 ganha!")
  }
}