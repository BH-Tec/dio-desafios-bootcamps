// Números em ponto flutuante podem ser bastante extensos para mostrar. Nesses casos, é conveniente usar a notação científica.

// Você deve escrever um programa que, dado um número em ponto flutuante, mostre este número na notação científica: sempre mostre o sinal da mantissa; sempre mostre 4 casas decimais na mantissa; use o caractere 'E' para separar a mantissa do expoente; sempre mostre o sinal do expoente; e mostre o expoente com pelo menos 2 dígitos.

// Entrada
// A entrada é um número em ponto flutuante de dupla precisão X (de acordo com o padrão IEEE 754-2008). Nunca haverá um número com mais de 110 caracteres nem com mais de 6 casas decimais.

// Saída
// A saída é o número X em uma única linha na notação científica detalhada acima. Veja os exemplos abaixo.
import java.util.Scanner;

import java.util.Locale;

public class NotacaoCientifica {

  public static void main(String[] args) {

    Locale.setDefault(new Locale("en", "US"));
    Scanner sc = new Scanner(System.in);
    String entrada = sc.nextLine();
    String[] aux = new String[entrada.length()];
    aux = entrada.split("");
    double x;
    if (aux[0].equals("+")) {
      entrada = entrada.substring(1);
      x = Double.parseDouble(entrada);
      System.out.printf("+%.4E\n", x);
    } else if (aux[0].equals("-")) {
      entrada = entrada.substring(1);
      x = Double.parseDouble(entrada);
      System.out.printf("-%.4E\n", x);
    } else {
      x = Double.parseDouble(entrada);
      if (x > 0)
        System.out.printf("+%.4E\n", x);
      else if (x < 0)
        System.out.printf("-%.4E\n", x);
      else
        System.out.printf("+%.4E\n", x);
    }
    sc.close();
  }
}
