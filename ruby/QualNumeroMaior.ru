# Desafio
# Crie um programa que verifique, entre duas entradas, qual número é o maior e qual é o menor e print eles no console dizendo “O número X é o maior e o Y é o menor” substituindo X e Y pelas entradas.

# Entradas
# As entradas serão dois números inteiros NUNCA iguais.

# Saída
# A saída deverá ser a frase indicando qual número é o maior e qual é o menor.

#Desafios Ruby na DIO têm funções "gets" e "puts" acessíveis globalmente:
# "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
# "puts": imprime um texto de saída (output), pulando linha.
# ".to_i": Converte para int
number1 = gets.to_i
number2 = gets.to_i

#TODO: Crie as condições necessárias para verificar qual número é maior
#e print no console com a frase
if number1 > number2
  puts "O número #{number1} é o maior e o #{number2} é o menor"
else
  puts "O número #{number2} é o maior e o #{number1} é o menor"
end