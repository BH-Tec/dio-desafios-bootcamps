// Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. O último dado, que não entrará nos cálculos, contém o valor de idade negativa. Calcular e imprimir a idade média deste grupo de indivíduos.

// Entrada
// A entrada contém um número indeterminado de inteiros. A entrada será encerrada quando um valor negativo for lido.

// Saída
// A saída contém um valor correspondente à média de idade dos indivíduos.

// A média deve ser impressa com dois dígitos após o ponto decimal.

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let count = 0;
let n = 0;
let soma = 0;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

do {
  n = parseInt(gets())
  if (n > 0) {
    count += 1
    soma += n
  }
} while (n > 0);

media = soma / count
print(media.toFixed(2));