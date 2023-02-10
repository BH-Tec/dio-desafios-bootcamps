// Desafio
// Um número feliz é um número definido pelo seguinte processo:
// • Começando com qualquer número inteiro positivo, substitua o número pela soma dos quadrados de seus dígitos.
// • Repita o processo até que o número seja igual a 1 (onde ficará), ou faça um loop infinito em um ciclo que não inclua 1.
// • Aqueles números para os quais esse processo termina em 1 são felizes.
// • Retorna true se n for um número feliz e false se não for.

// Escreva um algoritmo para determinar se o número n é feliz.

import java.util.*;

public class NumeroFeliz {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
            int n = scan.nextInt();
           //TODO: Desenvolva um algoritmo que retorne se o número é feliz ou não
           scan.close();
           System.out.println(EstaFeliz(n));
       }

       public static boolean EstaFeliz(int n) {
        String texto = String.valueOf(n);
        if(texto.length() == 1) {
            return Integer.parseInt(texto) == 1;
        } do {
            String[] vetor = texto.split("");
            int soma = 0;
            for (int x = 0; x < vetor.length; x++) {
                int valor = Integer.parseInt(vetor[x]);
                soma += (valor * valor);
            }
            String somaString = String.valueOf(soma);
            if(somaString.length() == 1) {
                return Integer.parseInt(somaString) == 1;
            }
            texto = somaString;
        } while (texto.length() != 1);
        return false;
       }
}
