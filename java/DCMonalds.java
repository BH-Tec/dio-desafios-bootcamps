// Desafio
// Você levou sua namorada na incrível rede de lanchonetes Dc Monalds e ficou maravilhado como aquele lanche era gostoso. Porém, ficou horrorizado como algumas coisas no aplicativo do cardápio estavam erradas. Então, você se ofereceu para ajudá-los com seus conhecimentos de programação. Ao conversar com o gerente, ele te explicou que a vontade da lanchonete era criar um menu com os nomes dos ingredientes formando o lanche, como no exemplo abaixo:

// Pao
// Presunto
// Carne
// Pao

// Ajude o restaurante a programar isso.

// Entrada
// A entrada serão os ingredientes que compõem o lanche.

// Saída
// A saída deverá ser o lanche montado com as palavras que definem os ingredientes.

import java.util.Scanner;

public class DCMonalds {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String ingredients = sc.nextLine();
    String[] ingredientsArray = ingredients.split(";");
    
    for (int i = 0; i < ingredientsArray.length; i++) {
      System.out.println(ingredientsArray[i]);
    }
  }
}
