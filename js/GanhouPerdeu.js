// Desafio
// Seu tio Vanderlei, após ficar milionário com as criptomoedas, quis gastar tudo que tinha em mais criptomoedas para se tornar bilionário. Porém, sabemos que o mercado as vezes pode ser instável e o valor dessas moedas podem cair. Crie um programa que irá verificar se o tio Vanderlei vai ficar ainda mais rico ou perderá tudo.

// Entrada
// A entrada será 1 ou 0 representando respectivamente true e false.

// Saída
// A saída deve ser se o tio Vanderlei ficou rico ou não.

// Exemplo
// 1 – Ficou rico!
// 0 – Perdeu tudo!

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
let ganhouAposta = parseInt(gets())

//TODO: Crie uma condicional if-else corretamente para atender aos requisitos para solucionar o problema;
if (ganhouAposta === 1) {
  print("Ficou rico!")
} else {
  print("Perdeu tudo!")
}