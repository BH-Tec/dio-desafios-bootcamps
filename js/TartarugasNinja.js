// Desafio 2
// Rafael, Michelangelo, Leonardo e Donatello são tartarugas mutantes com superpoderes que adoram pizza.
// Certo dia, após lutarem contra criminosos nos esgotos de Nova Iorque, resolveram pedir uma pizza.
// Quando a pizza chegou perceberam que ela havia sido mal cortada, o que gerou uma briga entre eles para saber quantos pedaços cada um comeria.
// Ajude as tartarugas ninja escrevendo um programa que a partir de um dado o número de cortes retorna o número máximo de fatias possíveis.

function numeroMaximoFatias(n) {
  return 1 + (n * (n + 1)) / 2
}

let qtd = gets()
let qtdInteiro = parseInt(qtd)

print(numeroMaximoFatias(qtdInteiro))