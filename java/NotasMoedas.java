// Desafio
// Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

// Saída
// Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

// Obs: Utilize ponto (.) para separar a parte decimal.

import java.util.Locale;
import java.util.Scanner;

public class NotasMoedas {

  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner sc = new Scanner(System.in);
    double N;
    int quociente, resto;
    int[] nota = { 100, 50, 20, 10, 5, 2 };
    int[] moeda = { 100, 50, 25, 10, 5, 1 };
    N = sc.nextDouble();
    resto = (int) (N * 100);
    System.out.println("NOTAS:");

    for (int i = 0; i < nota.length; i++) {
      quociente = resto / (nota[i] * 100);
      System.out.printf("%d nota(s) de R$ " + nota[i] + ".00\n", quociente);
      resto = resto % (nota[i] * 100);
    }
    // Moedas
    System.out.println("MOEDAS:");
    for (int i = 0; i < moeda.length; i++) {
      quociente = resto / (moeda[i]);
      switch (moeda[i]) {
        case 100:
          System.out.println(quociente + " moeda(s) de R$ 1.00");
          break;
        case 50:
          System.out.println(quociente + " moeda(s) de R$ 0.50");
          break;
        case 25:
          System.out.println(quociente + " moeda(s) de R$ 0.25");
          break;
        case 10:
          System.out.println(quociente + " moeda(s) de R$ 0.10");
          break;
        case 5:
          System.out.println(quociente + " moeda(s) de R$ 0.05");
          break;
        case 1:
          System.out.println(quociente + " moeda(s) de R$ 0.01");
          break;
        default:
          break;
      }
      resto = resto % (moeda[i]);
    }
    sc.close();
  }
}
