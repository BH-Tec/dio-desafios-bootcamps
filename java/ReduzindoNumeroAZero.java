/*
Desafio 1
Dado um inteiro x, retorne o número de etapas para reduzi-lo a zero.
Em uma etapa, se o número atual for par, você deve dividi-lo por 2, caso contrário, você deve
subtrair 1 dele.
*/

import java.util.*;
 
public class ReduzindoNumeroAZero {
    public static void main(String[] args) {
        int num = Integer.parseInt(new Scanner(System.in).nextLine());
        var step = 0;

        while (num > 0) {
            if ((num & 1) == 1) {
                step++;
            }
            num /= 2;
            step++;
        }
		System.out.println(step - 1);
    }
}