// Desafio
// Seu tio Vanderlei, vendo que as criptomoedas davam um bom retorno, resolveu vender todos os móveis da casa para aplicar o dinheiro. Após 4 meses, com algumas quedas no valor, ele pediu para que você criasse um programa que verificasse qual foi o mês em que ele teve o maior rendimento.

// (Verificar o maior número de um array)

// Entrada
// A entrada será uma lista com 4 valores.

// Saída
// A saída deve ser o maior valor dessa lista.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let dados = gets().split(" ")
let arr = []
for (i = 0; i < dados.length; i++) {
    arr.push(dados[i])
}

max_valor = Math.max(...arr) //Com essa função Math.max conseguimos encontrar o maior número. Como queremos encontrar 
//dentro de um array utilizamos o "spread" "..." antes do nome do array para que a função Math.max percorra o array 
//verificando  todos os números;
print(max_valor)
