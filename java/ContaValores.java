// Desafio
// Jorginho é professor do primário de uma determinada escola. Ele tem 100000 alunos e precisa criar um programa que verifica quantos espaços em branco e quantas vogais existem em uma determinada string de entrada que os alunos entregaram na avaliação final. Ajude-o a realizar essa tarefa antes que o tempo para entrega-la no fim do semestre acabe!

// Entrada
// A entrada será uma frase no formato de string. 

// Saída
// A saída deverá retornar quantos espaços em branco e quantas vogais existem na determinada string, conforme exemplo abaixo:

import java.util.Scanner;

public class ContaValores {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String frase = sc.nextLine();
    int espacos = 0;
    int vogais = 0;
    char[] arrVogais = {'a', 'e', 'i', 'o', 'u'};

    for (int i = 0; i < frase.length(); i++) {
      char caracter = Character.toLowerCase(frase.charAt(i));
      if (caracter == ' ') {
        espacos++;
      } else {
        for (int j = 0; j < arrVogais.length; j++) {
          if (caracter == arrVogais[j]) {
            vogais++;
            break;
          }
        }
      }
    }

    System.out.println("Espacos em branco: " + espacos + " Vogais: " + vogais);
  }
}
