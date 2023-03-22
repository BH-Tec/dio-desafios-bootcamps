// Desafio
// Astrônomos e astrofísicos utilizam diferentes unidades de tempo para medir o tempo em outros planetas. Neste desafio de código, você deverá criar um programa que solicite a idade de uma pessoa em anos terrestres e calcule a idade equivalente em outros planetas. Para isso, considere as seguintes informações:

// Marte: 1 ano marciano dura aproximadamente 1,88 anos terrestres;
// Venus: 1 ano venusiano dura aproximadamente 0,62 anos terrestres;
// Jupiter: 1 ano jupiteriano dura aproximadamente 11,86 anos terrestres.
// Entrada
// Solicitação da idade em anos terrestres através da entrada de dados do usuário;
// Solicitação do planeta desejado (Marte, Venus ou Jupiter) através da entrada de dados do usuário.
// O usuário deve fornecer sua idade em anos terrestres e o planeta para o qual deseja converter a idade.

// Saída
// Exibição da idade equivalente em anos planetários de acordo com o planeta escolhido pelo usuário.
// A saída deve ser apresentada em uma mensagem na tela, informando a idade equivalente em anos planetários para o planeta escolhido, com duas casas decimais após a vírgula. Se o planeta informado pelo usuário não for um dos três planetas mencionados acima, a mensagem "Planeta invalido." deve ser exibida.

// Exemplos
// Para ajudar a testar seu programa, a tabela abaixo apresenta alguns exemplos de dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// 30
// Jupiter

// Idade equivalente em Jupiter: 2,53 anos

// 27
// Venus

// Idade equivalente em Venus: 43,55 anos

// 50
// Marte	Idade equivalente em Marte: 26,60 anos
// 80
// Urano	Planeta invalido.

// Para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma: 
// - new Scanner(System.in): cria um leitor de Entradas, com métodos úteis com prefixo "next";
// - System.out.println:.imprime um texto de Saída (Output) e pulando uma linha.

import java.util.Scanner;

public class IdadePlanetaria {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    double idadeTerrestre = scanner.nextDouble();
    String planeta = scanner.next();

    // TODO: Crie as condições para calcular a idade equivalente de cada planeta.
    double idadePlaneta = 0.0;
    String nomePlaneta = "";

    if (planeta.equalsIgnoreCase("Marte")) {
      idadePlaneta = idadeTerrestre / 1.88;
      nomePlaneta = "Marte";
    } else if (planeta.equalsIgnoreCase("Venus")) {
      idadePlaneta = idadeTerrestre / 0.62;
      nomePlaneta = "Venus";
    } else if (planeta.equalsIgnoreCase("Jupiter")) {
      idadePlaneta = idadeTerrestre / 11.86;
      nomePlaneta = "Jupiter";
    } else {
      System.out.println("Planeta invalido.");
      System.exit(0);
    }
    // TODO: Imprima a saída conforme descrito neste desafio.
    System.out.printf("Idade equivalente em %s: %.2f anos", nomePlaneta, idadePlaneta);

    scanner.close();
  }
}