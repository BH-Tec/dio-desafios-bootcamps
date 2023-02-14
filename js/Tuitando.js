// DESAFIO
// O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. Conferir se um texto vai caber em um tuíte é sua tarefa.

// Entrada
// A entrada é uma linha de texto T (1 ≤ |T| ≤ 500).

// Saída
// A saída é dada em uma única linha. Ela deve ser "TWEET" (sem as aspas) se a linha de texto T tem até 140 caracteres. Se T tem mais de 140 caracteres, a saída deve ser "MUTE".

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
let tweet = gets();

// TODO: Crie as outras condições necessárias para a resolução do desafio.
if (tweet.length <= 140) {
  print("TWEET");
} else {
  print("MUTE");
}