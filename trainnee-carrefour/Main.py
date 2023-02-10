# Desafio
# Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
# Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
# O salário a ser transferido é calculado da seguinte maneira: 
# (valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios
# Para calcular o percentual de imposto segue as aliquotas:
#     De R$ 0.00 a R$ 1100.00 = 5.00%
#     De R$ 1100.01 a R$ 2500.00 = 10.00%
#     Maior que R$ 2500.00 = 15.00%

def calcular_imposto(salario):
    aliquota = 0.00
    if (salario >= 0 and salario <= 1100):
        aliquota = 0.05
    #TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    if (salario > 1100 and salario <= 2500):
        aliquota = 0.10
    if (salario > 2500):
        aliquota = 0.15
    return aliquota * salario

#Lê os valores de Entrada:
valor_salario = float(input())
valor_beneficios = float(input())

#Calcula o imposto através da função "calcular_imposto":
valor_imposto = calcular_imposto(valor_salario)
#Calcula e imprime a Saída (com 2 casas decimais):
saida = valor_salario - valor_imposto + valor_beneficios
print(f'{saida:.2f}')