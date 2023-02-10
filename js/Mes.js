// Desafio
// Leia um valor inteiro entre 1 e 12, inclusive.
// Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês,
// com a primeira letra maiúscula.

const monthNumber = gets()

const months = {
  "1": "January",
  "2": "February",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}

print(months[`${monthNumber}`])