// Desafio
// Você recebe um inteiro n, o número de equipes em um torneio que tem regras estranhas:

// Se o número atual de equipes for par , cada equipe será emparelhada com outra equipe. Um total de n / 2 partidas são jogadas e n / 2 as equipes avançam para a próxima rodada.

// Se o número atual de equipes for ímpar , uma equipe avança aleatoriamente no torneio e o restante é emparelhado. Um total de (n - 1) / 2 partidas são jogadas e (n - 1) / 2 + 1as equipes avançam para a próxima rodada.

// Entrada
// A entrada será um número inteiro (n), que representa o número de equipes.

// Saída
// Retorna o número de partidas jogadas no torneio até que um vencedor seja decidido.
let lines = gets().split("\n");
var numberOfMatches = parseInt(lines.shift);
let n = parseInt(lines.shift());
let totalMatches = 0;
while (n > 1) {
  if (n % 2 === 0) {
    totalMatches += n / 2;
    n = n / 2;
  } else {
    totalMatches += (n - 1) / 2;
    n = ((n - 1) / 2) + 1;
  }
}

print(totalMatches);



