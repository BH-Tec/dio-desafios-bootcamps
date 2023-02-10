// Desafio
// Nesse desafio, dados dois números, verifique se eles são iguais. Caso sejam, retorne "Sao iguais!”.
// Caso contrário, retorne "Nao sao iguais!” sem as aspas. 

import java.util.*;

public class OsNumerosSaoIguais {

    public static void main(String[] args) {

        Integer Num1, Num2;

        Scanner scan = new Scanner(System.in);
        Num1 = scan.nextInt();
        Num2 = scan.nextInt();
        
        if (Num1 == Num2) {
            System.out.println("Sao iguais!");
        } else {
            System.out.println("Nao sao iguais!");   
        }       

    }
}