// Desafio
// Imagine que você está criando um aplicativo de entrega de comida e precisa informar ao usuário o tempo estimado de entrega de um restaurante. A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.

// Entrada
// A entrada deverá receber os valores abaixo:

// nomeRestaurante (string): o nome do restaurante desejado.
// tempoEstimadoEntrega (number): o tempo estimado de entrega em minutos.
// Saída
// Deverá retornar uma mensagem (string) informando ao usuário o tempo estimado de entrega do restaurante. Por exemplo, para o restaurante Bar do Zinho com o tempo estimado de entrega sendo 20, imprima:

// O restaurante Bar do Zinho entrega em 20 minutos.

// Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const nomeRestaurante = gets()
const tempoEstimadoEntrega = parseInt(gets())

//TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
//Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.
const mensagem = `O restaurante ${nomeRestaurante} entrega em ${tempoEstimadoEntrega} minutos.`

print(mensagem)