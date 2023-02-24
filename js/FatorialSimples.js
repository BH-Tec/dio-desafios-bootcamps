// Ler um valor N. Calcular e escrever seu respectivo fatorial. Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.

// Entrada
// A entrada contém um valor inteiro N (0 < N < 13).

// Saída
// A saída contém um valor inteiro, correspondente ao fatorial de N.

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída(output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());
let fatorial = 1;

//TODO: Complete os espaços em branco com uma possível solução para o desafio
for (let i = 1; i <= N; i++) {
  fatorial *= i;
}

print(fatorial);