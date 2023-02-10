// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 

// Saída
// Será  impresso o somatório de N até 0,

let n = parseInt(gets());

var result = 0;
for (var i = n; i >= 0; i--) {
  result += i;
}

print(result);