// Desafio
// Você está planejando uma mudança para a Irlanda e precisa calcular qual será o seu salário líquido, considerando o imposto a ser pago à Receita Federal. Para isso, você precisa implementar um programa que receba como entrada o seu salário bruto e o valor dos benefícios recebidos (como vale-refeição ou vale-transporte) e calcule o imposto a ser pago, de acordo com a tabela abaixo:

// Salário Bruto	Alíquota
// Até R$ 1.100,00	5%
// De R$ 1.100,01 até R$ 2.500,00	10%
// Acima de R$ 2.500,00	15%
// O programa deve calcular o Imposto a ser pago de acordo com a tabela acima e, em seguida, subtrair esse valor do Salário Bruto mais os Benefícios, para obter o Salário Líquido.

// Entrada
// Um valor do tipo double correspondente ao Salário Bruto.
// Um valor do tipo double correspondente aos Benefícios recebidos.
// Saída
// Um valor do tipo double correspondente ao salário líquido após o pagamento do imposto, formatado com 2 casas decimais. Resumidamente, podemos condensar esse cálculo por meio da seguinte fórmula:
// Salário Líquido = Salário Bruto - Imposto + Benefício

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas:

// Entrada	Saída
// 1000
// 100	1050.00
// 2000
// 500	2300.00
// 3000
// 1000	3550.00

// Para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma: 
// - new Scanner(System.in): cria um leitor de Entradas, com métodos úteis com prefixo "next";
// - System.out.println:.imprime um texto de Saída (Output) e pulando uma linha.

import java.util.Scanner;

public class MudancaIrlanda {

  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);

    // Leitura do salário e dos benefícios
    double salarioBruto = input.nextDouble();
    double beneficios = input.nextDouble();

    double imposto = 0;
    // TODO: Implemente as regras para o cálculo do imposto.
    if (salarioBruto <= 1100) {
      imposto = salarioBruto * 0.05;
    } else if (salarioBruto <= 2500) {
      imposto = salarioBruto * 0.1;
    } else {
      imposto = salarioBruto * 0.15;
    }

    // Cálculo do salário líquido
    double salarioLiquido = salarioBruto - imposto + beneficios;

    // TODO: Imprimir o salário líquido com 2 casas decimais.
    System.out.printf("%.2f", salarioLiquido);
  }
}