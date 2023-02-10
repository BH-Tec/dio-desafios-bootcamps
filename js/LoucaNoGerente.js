// Desafio
// O gerente de uma loja de produtos eletrodomésticos ficou maluco e decidiu que todos o produtos da loja estavam na
// promoção com 70% de desconto.
// Ele percebeu que precisa automatizar o seu sistema para que nessas promoções o novo preço seja automaticamente
// calculado e repassado para os vendedores.
// Faça um algoritmo que leia o desconto e o preço de um produto e e mostre o seu novo preço com esse desconto.

let input = gets()
let desconto = parseInt(input) 

input = gets()

let precoAntigo = parseInt(input)

let precoNovo = parseInt(precoAntigo * (1 - desconto / 100))

print(precoNovo)
