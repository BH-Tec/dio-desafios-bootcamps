// Desafio
// Seu Zé está vendendo frutas com a seguinte tabela de preços:

// Exemplo 1

//  	Até 5 Kg	Acima de 5 Kg
// Morango	R$ 2,50 por Kg	R$ 2,20 por Kg
// Maçã	R$ 1,80 por Kg	R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

// Entrada
// Como entrada, você recebera a quantidade em kg de morangos e a quantidade em kg de maçãs.

// Saída
// Será o valor a ser pago pelo cliente, conforme a tabela de preços da quintanda do seu Zé.

import java.util.Scanner;
import java.text.DecimalFormat;

public class QuitandaDoSeuZe {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double morangos = sc.nextDouble();
    double macas = sc.nextDouble();
    double precoMorangos = morangos <= 5 ? 2.5 : 2.2;
    double precoMacas = macas <= 5 ? 1.8 : 1.5;
    double precoTotal = morangos * precoMorangos + macas * precoMacas;
    if (morangos + macas > 8 || precoTotal > 25) {
      precoTotal *= 0.9;
    }
    DecimalFormat df = new DecimalFormat("#.##");
    System.out.println(df.format(precoTotal));
  }
}
