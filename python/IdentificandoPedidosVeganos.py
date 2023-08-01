# Desafio
# O objetivo deste programa é ajudar a equipe do Restaurante Veggieworld a identificar rapidamente os pedidos veganos e não veganos e informar as calorias de cada prato definido pelo cliente. O programa deve solicitar ao usuário o número de pedidos que serão feitos e, em seguida, pedir informações sobre cada pedido, incluindo se o prato é vegano ou não (usando as opções "s" para sim e "n" para não) e a quantidade de calorias. Ao final, o programa deve exibir uma lista de todos os pedidos com suas informações correspondentes.

# Entrada
# Um inteiro n, que representa o número de pedidos que o usuário deseja fazer.
# Para cada pedido, o usuário deve inserir:
# O nome do prato;
# A quantidade de calorias do prato;
# Se o prato é vegano ou não (usando as opções "s" para sim e "n" para não).
# Saída
# O programa deve exibir uma lista de todos os pedidos com suas informações correspondentes, incluindo o nome do prato, se é vegano ou não, e a quantidade de calorias, no seguinte formato:

# Pedido X: NOME_DO_PRATO (EH_VEGANO?) - YYY calorias, onde "X" é o número do pedido, "NOME_DO_PRATO" é o nome do prato, "EH_VEGADO?" indica se o prato é vegano (escrever "Vegano" ou "Nao-vegano"), e "YYY" é a quantidade de calorias do prato.

# Exemplos
# A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

numPedidos = int(input())

for i in range(1, numPedidos+1):
    prato = input()
    calorias = input()
    ehVegano = False

    # TODO: Tendo em vista a variável booleana "ehVegano", imprima a saída deste desafio.
    if input() == 's':
        texto = 'Vegano'
    else:
        texto = 'Nao-vegano'
    print(f'Pedido {i}: {prato} ({texto}) - {calorias} calorias')
