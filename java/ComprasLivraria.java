// public class ComprasLivraria {

// }
// Desafio
// Crie um programa em Java para calcular o valor total de uma compra de livros em uma livraria. O programa deve perguntar o nome, o preço e a quantidade de cada livro que o cliente deseja comprar. O programa deve exibir o valor total da compra e o número de livros comprados.

// Entrada
// A entrada consiste em dados informados pelo usuário via teclado. O usuário deve informar o nome do livro (uma string sem espaços), o preço do livro (um número real) e a quantidade de livros desejados (um número inteiro).

// Saída
// A saída consiste em mensagens exibidas na tela do usuário. O programa deve exibir o valor total da compra, formatado com duas casas decimais, seguido do número de livros comprados. Por fim, o programa deve exibir a mensagem "Obrigado por comprar na nossa livraria!"

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis

// Entrada	Saída
// Senhor dos Anéis - As Duas Torres
// 29.99
// 1
// A Cor que Caiu do Espaço
// 31.00
// 2	
// Valor total da compra: 91.99
// Número de livros comprados: 3
// Obrigado por comprar na nossa livraria!

// O Código Da Vinci
// 19.00
// 2
// A Corte de Névoa e Fúria
// 40.00
// 1	
// Valor total da compra: 78.00
// Número de livros comprados: 3
// Obrigado por comprar na nossa livraria!

// Para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma: 
// - new Scanner(System.in): cria um leitor de Entradas, com métodos úteis com prefixo "next";
// - System.out.println:.imprime um texto de Saída (Output) e pulando uma linha.

import java.util.Scanner;

public class ComprasLivraria {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Instancia 2 objetos do tipo "Livro" com os dados de entrada.
    Livro livro1 = new Livro(scanner.nextLine(), scanner.nextDouble(), scanner.nextInt());
    scanner.nextLine(); // Limpa o buffer do teclado
    Livro livro2 = new Livro(scanner.nextLine(), scanner.nextDouble(), scanner.nextInt());

    // TODO: Considerando os objetos "livro1" e "livro2", calcule o valor total da
    // compra.
    double valorTotal = livro1.preco * livro1.quantidade + livro2.preco * livro2.quantidade;
    // TODO: Considerando os objetos "livro1" e "livro2", calcule o número de livros
    // comprados.
    int numLivros = livro1.quantidade + livro2.quantidade;

    // TODO: Imprima as linhas necessárias conforme a saída deste desafio.
    System.out.printf("Valor total da compra: %.2f\n", valorTotal);
    System.out.println("Numero de livros comprados: " + numLivros);
    System.out.println("Obrigado por comprar na nossa livraria!");
  }

  static class Livro {
    String nome;
    double preco;
    int quantidade;

    Livro(String nome, double preco, int quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
}
