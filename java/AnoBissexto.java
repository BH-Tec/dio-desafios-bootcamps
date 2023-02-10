// Entrada
// A entrada consiste em um valor inteiro referente ao ano solicitado.

// Saída
// A saída deverá retornar se o ano será bissexto ou não.

import java.util.Scanner;

public class AnoBissexto {
  public static void main(String[] args) {
    Scanner ent = new Scanner(System.in);
    int ano;

    ano = ent.nextInt();
    // TODO: Descubra se o ano é bissexto ou não
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
      System.out.println("Bissexto");
    } else {
      System.out.println("Nao Bissexto");
    }
  }
}