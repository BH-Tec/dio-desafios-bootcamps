# Desafio
# Crie um programa que verifique o número da entrada e some 2 a ele. Após essa operação, print o resultado no console com a seguinte frase: “O resultado foi:” sem as aspas.

# Entrada
# As entradas de teste serão números inteiros.

# Saída
# A saída deverá ser a frase e em seguida o resultado

#Desafios Ruby na DIO têm funções "gets" e "puts" acessíveis globalmente:
# "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
# "puts": imprime um texto de saída (output), pulando linha.
# ".to_i": Converte para int

number = gets.to_i
#TODO: print no console a frase com o resultado da operação
result = number + 2
puts "O resultado foi: #{result}"
