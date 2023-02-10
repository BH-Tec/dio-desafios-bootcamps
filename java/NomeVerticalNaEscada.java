// Descrição
// Faça um programa que solicite o nome do usuário e imprima-o de forma a mostrar o nome em formato de escada.

// Entrada
// A entrada consiste em uma string, sendo ela uma palavra.

// Saída
// A saída deverá imprimir a palavra em formato de escada, letra por letra, até se completar a palavra.

import java.util.*;

public class NomeVerticalNaEscada {
    
    public static void main(String args[]) {
        Scanner scanner = new Scanner(System.in);
        String palavra = scanner.next();
        
        for (int i = 1; i <= palavra.length(); i++) {
            System.out.println(palavra.substring(0, i));
        }
    }
}
