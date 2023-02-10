// DESAFIO
// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

// Entrada
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.

import java.util.Scanner;

public class Animal {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String animal1 = scanner.nextLine();
    String animal2 = scanner.nextLine();
    String animal3 = scanner.nextLine();
    String animal = "";

    if (animal1.equals("vertebrado")) {
      if (animal2.equals("ave")) {
        if (animal3.equals("carnivoro")) {
          animal = "aguia";
        } else if (animal3.equals("onivoro")) {
          animal = "pomba";
        }
      } else if (animal2.equals("mamifero")) {
        if (animal3.equals("onivoro")) {
          animal = "homem";
        } else if (animal3.equals("herbivoro")) {
          animal = "vaca";
        }
      }
    } else if (animal1.equals("invertebrado")) {
      if (animal2.equals("inseto")) {
        if (animal3.equals("hematofago")) {
          animal = "pulga";
        } else if (animal3.equals("herbivoro")) {
          animal = "lagarta";
        }
      } else if (animal2.equals("anelideo")) {
        if (animal3.equals("hematofago")) {
          animal = "sanguessuga";
        } else if (animal3.equals("onivoro")) {
          animal = "minhoca";
        }
      }
    }

    System.out.println(animal);
  }
}
