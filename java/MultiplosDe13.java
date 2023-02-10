/*
Desafio
Escreva um algoritmo que leia 2 valores inteiros A e B calcule a soma dos números que não são
múltiplos de 13 entre A e B, incluindo ambos.

Entrada
O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.

Saída
Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada,
inclusive ambos se for o caso.
*/

import java.io.IOException;
import java.util.Scanner;

public class MultiplosDe13 {
    public static void main(String[] args) throws IOException {
		Scanner leitor = new Scanner(System.in);
		int X = leitor.nextInt();
		int Y = leitor.nextInt();
		int soma = 0;
		if (X > Y) {
			for (int i = Y; i <= X; i++) {
				if (i % 13 != 0) soma += i;
			}
		} else {
			for (int i = X; i <= Y; i++) {
				if (i % 13 != 0) soma += i;
			}
		}
		System.out.println(soma);
    }
}