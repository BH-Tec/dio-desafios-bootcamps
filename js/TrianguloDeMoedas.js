// Desafio
// Neste desafio temos N moedas que precisam ser organizadas em forma de triângulo, desse modo, você deverá escrever um programa que
// imprima a altura máxima que podemos alcançar usando essas N moedas.

let N = parseInt(gets())
let altura = 0

// forma sugerida pela plataforma
// let n = 1 + 8 * N

for (let i = 1; i <= N; i++) {
    if (N - i >= 0) {
        N -= i
        altura++
    }
}

print(altura)