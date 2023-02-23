// A fórmula de Binet é uma forma de calcular números de Fibonacci.

// Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando a fórmula acima.

// Entrada
// A entrada é um número natural n (0 < n ≤ 50).

// Saída
// A saída é o valor de Fibonacci(n) com 1 casa decimal utilizando a fórmula de Binet dada.

let N = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o problema
let fibonacci = (Math.pow((1 + Math.pow(5, 1 / 2)) / 2, N) - Math.pow((1 - Math.pow(5, 1 / 2)) / 2, N)) / Math.pow(5, 1 / 2);

print(fibonacci.toFixed(1));