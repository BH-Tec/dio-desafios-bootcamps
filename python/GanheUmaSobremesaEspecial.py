# Desafio
# Crie um programa que informe ao usuário se ele pode receber um brinde especial de acordo com o valor total do pedido. Se o valor total do pedido for maior ou igual a R$ 50.00, o usuário receberá uma sobremesa grátis. Caso contrário, o usuário não receberá nenhum brinde.

# Entrada
# A entrada deverá receber o valor total do pedido em uma variável numérica:

# valorPedido: o valor do pedido.
# Saída
# Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não:

# Se valorPedido >= 50, a mensagem deve ser:
# Parabens, você ganhou uma sobremesa gratis!
# Caso contrário, a mensagem deve ser:
# Que pena, você nao ganhou nenhum brinde especial.
# Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

# Exemplos
# A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

valorPedido = int(input())

# TODO: Criar as condições necessárias para impressão da saída conforme o enunciado.
if valorPedido >= 50:
    mensagem = 'Parabens, você ganhou uma sobremesa gratis!'
else:
    mensagem = 'Que pena, você nao ganhou nenhum brinde especial.'
print(mensagem)