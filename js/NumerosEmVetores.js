// Desafio
// Faça um Programa que leia cinco números inteiros e armazene-os em um vetor chamado VETOR. Armazene os números pares no vetor PAR e os números ímpares no vetor IMPAR. 

// Entrada 
// Peça ao usuário que insira o valor de cinco números inteiros. 

// Saída
// Imprima os valores dos três vetores um em cada linha mostrando na primeira linha, os valores no Vetor, na segunda linha os valores Par(es) e na terceira linha os valores ímpares Impar(es). Conforme o exemplo a baixo.  

let vetor = [];
let pares = [];
let impares = [];

for (let i = 0; i < 5; i++) {
  let num = gets();
  vetor.push(num);
  if (num % 2 === 0) {
    pares.push(num);
  } else {
    impares.push(num);
  }
}

console.log("Vetor: " + vetor.join(","));
console.log("Par(es): " + pares.join(","));
console.log("Impar(es): " + impares.join(","));
