// Desafio
// Faça um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Caso o valor não esteja em nenhum destes intervalos, deverá ser impressa a mensagem: “Fora de intervalo”.

// O símbolo ( representa "maior que". Por exemplo:
// [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
// (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

// Entrada
// O arquivo de entrada contém um número com ponto flutuante qualquer.

// Saída

import java.io.IOException;
import java.util.Locale;
import java.util.Scanner;

public class Intervalo {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);

    Scanner sc = new Scanner(System.in);
    double num = sc.nextDouble();

    if (num >= 0.00 && num <= 25.00) {
      System.out.println("Intervalo [0,25]");
    } else if (num > 25.00 && num <= 50.00) {
      System.out.println("Intervalo (25,50]");
    } else if (num > 50.00 && num <= 75.00) {
      System.out.println("Intervalo (50,75]");
    } else if (num > 75.00 && num <= 100.00) {
      System.out.println("Intervalo (75,100]");
    } else {
      System.out.println("Fora de intervalo");
    }
  }
}