// Desafio
// Seu tio Vanderlei quer saber quanto as criptomoedas dele irão render em um período de n meses. Para isso, ele pediu que você criasse um programa que, de acordo com a entrada n, retornasse o valor total (a soma da quantia inicial com o rendimento). O valor inicial que ele possui é de 50 criptomoedas. Em uma pesquisa você descobriu que sempre a cada 10 criptomoedas, rende 1.

// Entrada
// A entrada será o tempo n em meses.

// Saída
// A saída deve ser o valor total de criptomoedas. Ou seja, a quantidade inicial mais o valor rendido.

// Exemplo
// n = 5 – 75 criptomoedas
// n = 10 – 100 criptomoedas
// n = 25 – 175 criptomoedas

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
let n = parseInt(gets())

//TODO: crie as variaveis necessarias para a resolução do problema;
let quantidadeInicial = 50

let quantidadeTotal = n * 5

//TODO 2: print na tela a quantidade total de criptomoedas (valor inicial + valor de rendimento);
print(quantidadeInicial + quantidadeTotal + " criptomoedas")