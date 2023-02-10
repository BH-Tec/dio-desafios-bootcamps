// Descrição
// Dado um inteiro positivo n , retorne o menor inteiro positivo que é um múltiplo 2 de e n .

import java.util.Scanner;

public class MenorNumero {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int numero = scanner.nextInt();

    //TODO: Crie as outras condições necessárias para a resolução do desafio.
    int minimoMultiplo = 0;
    if (numero % 2 == 0) {
      minimoMultiplo = numero;
    } else {
      minimoMultiplo = numero * 2;
    }

    System.out.println("O resultado eh:" + minimoMultiplo);
}
}
