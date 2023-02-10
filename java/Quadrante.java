/*
Desafio
O plano cartesiano é feito por uma quantidade indeterminada de pontos. Ele é composto por
quatro quadrantes como mostra a imagem abaixo. Desenvolva um programa que, dada as coordenadas de
entrada (x, y), verifique em qual quadrante está situado o ponto.
Caso uma das coordenadas seja NULA, o programa deve parar.

Entrada
As entradas serão 2 valores inteiros.

Saída
Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida,
conforme o exemplo.
*/

import java.util.Scanner;

public class Quadrante {
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		int y = sc.nextInt();
		
		while (x != 0 && y != 0) {
			if (x > 0 && y > 0) {
				System.out.println("primeiro");
			}
			else if (x < 0 && y > 0) {
				System.out.println("segundo");
			}
			else if (x < 0 && y < 0) {
				System.out.println("terceiro");
			}
			else {
				System.out.println("quarto");
			}
			x = sc.nextInt();
			y = sc.nextInt();
		}
		sc.close();
	}
}