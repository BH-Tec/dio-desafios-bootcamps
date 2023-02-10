// Desafio
// Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.

import java.util.Scanner;

public class SomandoMultiplos {
    public static void main(String[] args) {
        int A, N;
        int soma = 0;

        Scanner input = new Scanner(System.in);
        A = input.nextInt();
        N = input.nextInt();

        for(int i = 1; i <= N; i++){
            if(i % A == 0) {
                soma += i; 
            }
        }

        System.out.println(soma);
    }
    
}
