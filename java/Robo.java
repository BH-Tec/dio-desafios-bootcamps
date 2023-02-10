/* 
Desafio 2
Em um jogo 2D existe um robô de limpeza que começa na posição (0,0).
Ele recebe alguns comandos através de uma sequência de movimentos.
Os movimentos válidos são:
	'W' (movimento para cima),
	"S"(movimento para baixo),
	"D"(movimento para direita)
	"A"(movimento para esquerda).
Você deverá verificar se após completar seus movimentos o robô se encontra na posição (0,0).
Retorne true se o robô retornar à origem ou false caso contrário.
Assuma que a magnitude do movimento do robô é a mesma para cada movimento.
*/

import java.util.*;
 
public class Robo {
    public static void main(String[] args) {
		String movimentos = new Scanner(System.in).nextLine();
		var x = 0;
		var y = 0;

		for (int i = 0; i < movimentos.length(); i++) {
			char ch = movimentos.charAt(i);
			if (ch == 'W') {
				x++;
			}
			if (ch == 'S') {
				x--;
			}
			if (ch == 'D') {
				y++;
			}
			if (ch == 'A') {
				y--;
			}
		}
		if (x == 0 && y == 0) {
			System.out.print("true");
		} else {
			System.out.print("false");
		}
	}
}