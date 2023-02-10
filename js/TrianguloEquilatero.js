// Desafio
// Dado o comprimento dos lados de um triângulo equilátero, escreva um programa para encontrar a área da circunferência
// do triângulo equilátero dado.

let pi = 3.14159265358979323846

let a = gets()
let raio = 0
let area = 0

raio = a * Math.sqrt(3) / 3
area = pi * Math.pow(raio, 2)

// A saída esperada pedida na questão é "é", porém ao executar o código e avaliar a saída teste é com "eh"
// print("A area da circunferencia é: " + area.toFixed(2))
print("A area da circunferencia eh: " + area.toFixed(2))