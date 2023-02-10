/*
Desafio 2
Neste problema, deve-se ler:
O código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1.
O código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2.
Após, calcule e mostre o valor a ser pago.
*/

import java.io.IOException;
import java.util.Scanner;

public class CalculoSimples {

public static void main(String[] args) throws IOException {
  Scanner leitor = new Scanner(System.in);
  double total = 0d;

  for(int i = 0; i < 2; i++) {
    int cod1 = leitor.nextInt();
    int n1 = leitor.nextInt();
    double valor1 = leitor.nextDouble();

    total += (n1 * valor1);
    }
  System.out.println(String.format("VALOR A PAGAR: R$ %.2f", total));
  }
}