// Desafio
// Neste desafio, faça um programa que calcule o valor de H com N termos. 

// Sendo, H = 1 + 1/2 + 1/3 + 1/4 + ... + 1/N. 

// Entrada 
// A entrada consiste em um número inteiro positivo. 

// Saída 
// Na saída será impresso o valor que representa a soma dos termos.
// Imprima a soma dos termos, considerando um resultado com duas casas decimais:

import java.util.Scanner;

public class SomaDeValores {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double n = scan.nextInt();
        double h = 0;
        for (int i = 1; i <= n; i++) {
          //TODO: Calcule o valor de H de forma que resulte na soma dos termos:
            h += 1.0 / i;
        }
        //TODO: Imprima a soma dos termos, considerando um resultado com duas casas decimais [CORREÇÃO: RETORNO SEM AS CASAS DECIMAIS]
        System.out.printf("%.0f\n", h);
    }
}
