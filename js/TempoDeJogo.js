// Desafio
// Tendo como base a hora inicial e final de um jogo, calcule a duração do dele, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de, 60 minutos e máxima de 24 horas.

// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.

// Saída
// Apresente a duração do jogo conforme exemplo abaixo.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.
var line = gets().split(" ")

var hInicial = parseInt(line[0])
var hFinal = parseInt(line[1])

if (hInicial < hFinal) {
  duracao = hFinal - hInicial;
} else {
  duracao = 24 - hInicial + hFinal;
}

if (duracao <= 24 && duracao >= 1) {
  print('O JOGO DUROU ' + duracao + ' HORA(S)');
} else if (duracao == 0) {
  print('O JOGO DUROU 24 HORA(S)');
} else {
  print('O JOGO DUROU MAIS DE 24 HORAS');
}


