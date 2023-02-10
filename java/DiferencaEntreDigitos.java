// Desafio
// O desafio consiste em um número inteiro n, onde será necessário calcular a diferença entre o produto e
// a soma dos seus digitos.

import java.util.Arrays;
import java.util.Scanner;

public class DiferencaEntreDigitos {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    int numero = scan.nextInt();

    String numeroEmString = String.valueOf(numero);
    String[] split = numeroEmString.split("");

    int[] ints = Arrays.stream(split).mapToInt(Integer::new).toArray();

    int produto = 1;
    int soma = 0;
    int resultado = 0;
    
    for (int number : ints){
      produto*= number;
      soma += number;
    }
    System.out.println(produto - soma);
  }
}
