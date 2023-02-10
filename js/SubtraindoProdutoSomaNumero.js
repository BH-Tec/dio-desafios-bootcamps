// Desafio
// Dado um número inteiro ( n ) , retorne a diferença entre o produto de seus dígitos e a soma de seus dígitos.

let lines = gets().split("")

let subtractProductAndSum = 0
let n = 0
let produto = 1
let soma = 0

while( lines.length > 0) {
  n = parseInt(lines.shift())
  soma += n
  produto *= n
}

subtractProductAndSum = produto - soma

print(subtractProductAndSum)