// Desafio
// Leia dois valores inteiros identificados como variáveis A e B.
// Calcule a soma entre elas e chame essa variável de SOMA.
// A seguir escreva o valor desta variável.

import java.util.Scanner;

public class SomaSimples {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numero1 = scanner.nextInt();
        int numero2 = scanner.nextInt();
        int soma = numero1 + numero2;
       
        System.out.println("SOMA = "+soma);

    }

}