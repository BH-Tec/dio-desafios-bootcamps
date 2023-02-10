// Desafio  
// Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

// Entrada
// A entrada consiste em um número inteiro n, representando o valor total. 

// Saída
// A saída consiste em retornar o menor número de números quadrados perfeitos. 

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

const dp = new Array(n + 1).fill(Infinity); 
dp[0] = 0; 

//TODO: Com base no valor total, retorne o menor número de quadrados perfeitos.
function minNumeroDeQuadradosPerfeitos(n) {
    for (let i = 1; i <= n; i++) {
    let j = 1;
    while (j * j <= i) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      j++;
    }
  }

  return dp[n];
}

print(minNumeroDeQuadradosPerfeitos(n));