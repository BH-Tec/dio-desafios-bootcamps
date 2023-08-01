# Desafio
# Você foi contratado para desenvolver um sistema que armazena informações dos pedidos de comida online realizados por um cliente. O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado.

# Entrada
# A entrada é composta por:

# Uma linha com um número inteiro n representando a quantidade de pedidos que o usuário deseja inserir;
# n linhas, cada uma contendo uma string com o nome do pedido e um valor em ponto flutuante separados por espaço. O nome do pedido não contém espaços em branco;
# Uma linha contendo o cupom de desconto escolhido (10% ou 20%).
# Saída
# O programa deve exibir uma única linha contendo o valor total de todos os pedidos com o desconto aplicado, no seguinte formato:

# Valor total: XX.YY, onde "XX.YY" é a soma de todos os pedidos com desconto em formato de duas casas decimais após a vírgula.

# Exemplos
# A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

def main():
    n = int(input())
    total = 0

    for i in range(1, n + 1):
        pedido = input().split(" ")
        nome = pedido[0]
        valor = float(pedido[1])
        total += valor

# TODO: Criar as condições para aplicar o cupom de desconto (10% ou 20%).
    referencia = input()

    if referencia == '10%':
        desconto = total * 0.1
    elif referencia == '20%':
        desconto = total * 0.2
      
    print('Valor total: %.2f' % (total - desconto))

if __name__ == "__main__":
    main()