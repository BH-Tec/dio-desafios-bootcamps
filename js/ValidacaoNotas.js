// Desafio
// Para ajudar a calcular as notas referentes às duas avaliações dos alunos, uma professora pediu para que você desenvolva um programa que calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

// Entrada
// A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem lidas duas notas válidas.

// Saída
// Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
// Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;

let somaDasNotas = 0;
let contador = 0;

do {
  let notaEntradaConsole = parseFloat(gets());

  if (notaEntradaConsole >= 0 && notaEntradaConsole <= 10) {
    somaDasNotas += notaEntradaConsole;
    contador++;
  } else {
    print("nota invalida");
  }
} while (contador < 2);

let media = somaDasNotas / 2;
print("media = " + media.toFixed(2));
