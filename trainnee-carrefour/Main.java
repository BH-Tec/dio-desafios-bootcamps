// Desafio
// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário a ser transferido é calculado da seguinte maneira: 
// (valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios
// Para calcular o percentual de imposto segue as aliquotas:
//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// Lê os valores de Entrada:
		Scanner leitorDeEntradas = new Scanner(System.in);
		float valorSalario = leitorDeEntradas.nextFloat();
		float valorBeneficios = leitorDeEntradas.nextFloat();

		// TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.

		float valorImposto = 0;
		if (valorSalario >= 0 && valorSalario <= 1100) {
			// Atribiu a aliquota de 5% mediante o salário:
			valorImposto = 0.05F * valorSalario;
		}
		if (valorSalario > 1100 && valorSalario <= 2500) {
			// Atribiu a aliquota de 10% mediante o salário:
			valorImposto = 0.10F * valorSalario;
		}
		if (valorSalario > 2500) {
			// Atribiu a aliquota de 15% mediante o salário:
			valorImposto = 0.15F * valorSalario;
		}

		// Calcula e imprime a Saída (com 2 casas decimais):
		float saida = valorSalario - valorImposto + valorBeneficios;
		System.out.println(String.format("%.2f", saida));
	}
}