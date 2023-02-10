// Desafio
// Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

// Entrada
// A entrada são arrays de tamanho variado que possuem somente números inteiros.

// Saída
// A saída deverá retornar todos os valores pares para o começo do array.

let arr = gets().split('');
let arrVazio = [];

// TODO: crie a condição necessária para que o array fique ordenado como o exercício pede
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    arrVazio.unshift(arr[i]);
  } else {
    arrVazio.push(arr[i]);
  }
}

let resultado = arrVazio.join(',');
print(resultado);