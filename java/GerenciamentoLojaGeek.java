// Desafio
// Neste desafio, você deverá ajudar o gerente de uma loja geek a gerenciar o desempenho de seus funcionários em um determinado período. O gerente pode inserir a média das avaliações de desempenho dos funcionários e o programa irá classificar cada um deles em "APR" (bom), "MED" (médio) ou "REP" (ruim), com base em critérios predefinidos.

// Entrada
// O programa solicitará ao usuário que insira a média das avaliações de desempenho dos funcionários em um determinado período.

// Saída
// O programa irá classificar cada funcionário em "APR" (bom), "MED" (médio) ou "REP" (ruim), de acordo com as seguintes regras:

// Se a média da avaliação for menor que 5, o funcionário estará reprovado em seu teste e será classificado como "REP";
// Se a média da avaliação for menor que 7, mas maior ou igual a 5, o funcionário terá sua avaliação como "MED";
// Se a média for maior ou igual a 7, o funcionário está aprovado no teste de desempenho e será classificado como "APR".
// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// 3	REP
// 4.5	REP
// 5	MED
// 6	MED
// 7	APR
// 8.5	APR

// Para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma: 
// - new Scanner(System.in): cria um leitor de Entradas, com métodos úteis com prefixo "next";
// - System.out.println:.imprime um texto de Saída (Output) e pulando uma linha.

import java.util.Scanner;

public class GerenciamentoLojaGeek {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    double media = scanner.nextDouble();

    // TODO: Verifique a média lida e imprima a avaliação do funcionário.
    // Onde: "APR" é bom, "MED" é médio e "REP" é ruim.
    if (media < 5) {
      System.out.println("REP");
    } else if (media < 7) {
      System.out.println("MED");
    } else {
      System.out.println("APR");
    }
  }
}