# Desafio
# Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

# Entrada
# A entrada contém um único valor inteiro.

# Saída
# Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

month = input()

months_dict = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December"
}

print(months_dict[int(month)])