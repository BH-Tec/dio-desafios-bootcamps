// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n.
// Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é:
// multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
// Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas.
// Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

// Entrada
// A entrada consiste em um valor inteiro positivo N.

// Saída
// A saída consiste em retornar o valor do seu fatorial desajeitado de N.

let lines = gets()
let valor = lines
let cont = 1
let ns = []

let mat1 = "Math.floor("
let mat2 = ")"
let cmat = false

function fatorial(n) {
  for (let i = n; i > 0; i--) {
    if (cont === 1 && i > 1) {
      ns.push(mat1)
      cmat = true
      ns.push(n)
      ns.push("*")
      cont = 2
    }

    else if (cont === 2 && i > 1) {
      ns.push(n)
      ns.push("/")
      cont = 3
    }

    else if (cont === 3 && i > 1) {
      ns.push(n)
      ns.push(mat2)
      cmat = false
      ns.push("+")
      cont = 4
    }

    else if (cont === 4 && i > 1) {
      ns.push(n)
      ns.push("-")
      cont = 1
    }

    n--
  }

  ns.push(1)
  if (cmat === true) {
    ns.push(mat2)
  }

  let juntos = ns.join("")
  print(eval(juntos))
}

fatorial(valor)