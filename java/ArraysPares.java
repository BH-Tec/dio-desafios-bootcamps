/*
Desafio 1
O objetivo deste desafio é resolvê-lo utilizando o seu conhecimento sobre Arrays, uma estrutura de
dados que armazena uma coleção de dados em um bloco de memória. Dado uma array de valores:
  {2, 3, 5, 7, 11, 13, 18, 34}
desenvolva um programa que retorne como resultado apenas os números pares dessa array.
*/

public class ArraysPares {
public static void main(String[] args) {
    int[] inteiros = {2, 3, 5, 7, 11, 13, 18, 34};

    for (int i = 0; i < inteiros.length; i++) {
        if (inteiros[i] % 2 == 0) {
            System.out.println(inteiros[i]);
        } 
    }
    }
}