// Descrição
// Dados dois números A e B, onde o valor de ‘B’ é incrementado ou decrementado por alguma porcentagem de ‘A’.
// Sua tarefa é descobrir qual é a porcentagem de diferença entre esses dois valores.

let A = parseInt(gets())
let B= parseInt(gets())

let percentual = (B - A) / A * 100

print(Math.trunc(percentual) + "%")