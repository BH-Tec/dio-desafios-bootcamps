// Desafio
// Faça um programa que peça para 3 pessoas a sua idade, ao final o programa deverá verificar se a média
// de idade da turma varia entre 0 e 25, 26 e 60 e maior que 60;
// e então, dizer se a turma é jovem, adulta ou idosa, conforme a média calculada.

import java.util.Scanner;

public class MediaIdade {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);

        int idade1 = leitor.nextInt();
        int idade2 = leitor.nextInt();
        int idade3 = leitor.nextInt();

        //TODO: Implemente um condição de verifique a média de idade da turma conforme a descrição do desafio:
        double mediaIdades = (idade1 + idade2 + idade3) / 3;

        if(mediaIdades < 26) {
            System.out.println("Jovem!");
        } else
        if(mediaIdades > 26 && mediaIdades <= 60) {
            System.out.println("Adulta!");
        } else {
            System.out.println("Idosa!");
        }
    }    
}
