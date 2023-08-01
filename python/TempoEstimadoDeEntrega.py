# Desafio
# Imagine que você está criando um aplicativo de entrega de comida e precisa informar ao usuário o tempo estimado de entrega de um restaurante. A mensagem deve conter o nome do restaurante e o tempo estimado de entrega em minutos.

# Entrada
# A entrada deverá receber os valores abaixo:

# nomeRestaurante (string): o nome do restaurante desejado.
# tempoEstimadoEntrega (number): o tempo estimado de entrega em minutos.
# Saída
# Deverá retornar uma mensagem (string) informando ao usuário o tempo estimado de entrega do restaurante. Por exemplo, para o restaurante Bar do Zinho com o tempo estimado de entrega sendo 20, imprima:

# O restaurante Bar do Zinho entrega em 20 minutos.

# Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

# Exemplos
# A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

nomeRestaurante = input()
tempoEstimadoEntrega = int(input())

# TODO: Imprimir a saída no padrão definido no enunciado deste desafio.
# Dica: Para simplificar a formatação, utilize o conceito de interpolação de strings.
print(f'O restaurante {nomeRestaurante} entrega em {tempoEstimadoEntrega} minutos.')