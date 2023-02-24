// Ler um número inteiro N e calcular todos os seus divisores.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Escreva todos os divisores positivos de N, um valor por linha.

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída(output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let n = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o problema
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    print(i);
  }
}