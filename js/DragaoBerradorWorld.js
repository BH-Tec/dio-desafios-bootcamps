// Desafio
// Todos os habitantes do Mundo Mágico estão super animados com a abertura do Dragão Berrador World, o mais novo parque de diversões do universo bruxo. 

// Infelizmente foram impostas algumas restrições no momento da homologação do brinquedo pelo Ministério Bruxo. Por questões de segurança, há uma altura mínima e uma altura máxima que as pessoam devem ter para poder passear na montanha-russa.

// Para o dia da inauguração do parque, todos os convidados realizaram um pré-cadastro no qual indicaram sua altura. Para reduzir filas e otimizar a operação do parque no primeiro dia, você foi contratado pela gerência do Dragão Berrador World para fazer um programa que, dado o número de visitantes, altura mínima, altura máxima e as alturas de todos os visitantes, calcule quantas pessoas poderão andar na montanha-russa.

// Entrada
// A entrada contém vários casos de teste. A primeira linha de cada caso consiste em três inteiros N (1 ≤ N ≤ 100), Amin e Amax (50 ≤ Amin ≤ Amax ≤ 250), o número de visitantes, a altura mínima e máxima em centímetros para andar na montanha-russa, respectivamente.

// As N linhas seguintes contém, cada uma, um número inteiro representando a altura do visitantes, em centímetros.

// Saída
// Para cada caso de teste, imprima uma única linha com o número visitantes que podem passear na montanha-russa.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var s = gets().split(" ");

//TODO: imprima uma única linha com o número visitantes que podem passear na montanha-russa
let n = parseInt(s[0]);
let min = parseInt(s[1]);
let max = parseInt(s[2]);

let altura, conta = 0;
for (let x=0 ; x<n ; x++) {
  altura = parseInt(gets());
  if(altura >= min && altura <= max)
    conta++;
}
print(conta);
