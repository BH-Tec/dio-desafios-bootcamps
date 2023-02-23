// Desafio
// O senhor Milli, morador da cidade Petland, é o famoso proprietário da maior fábrica de jogos de tabuleiros do mundo. 

// Recentemente, ele teve a ideia de lançar um novo jogo exclusivo de tabuleiro, que ele apelidou de Tabuleiro da Frequência.

// O jogo ocorre da seguinte forma. Inicialmente, um tabuleiro com dimensões N × N é dado contendo apenas 0’s. Depois disso, Q operações são propostas, podendo ser de 4 tipos:

// 1 X R: Atribuir o valor R a todos os números da linha X;

// 2 X R: Atribuir o valor R a todos os números da coluna X;

// 3 X: Imprimir o valor mais frequente na linha X;

// 4 X: Imprimir o valor mais frequente da coluna X.

// Milli não é muito bom com computadores, mas é bastante preguiçoso. Sabendo que você é um dos melhores programadores do mundo, ele precisa sua ajuda para resolver este problema.

// Entrada
// A primeira linha da entrada é composta por dois inteiros N e Q (1 ≤ N, Q ≤ 105), representando, respectivamente, o tamanho do tabuleiro e a quantidade de operações. As próximas Q linhas da entrada vão conter as Q operações. O primeiro inteiro de cada linha vai indicar o tipo da operação. Caso seja 1 ou 2, será seguido por mais dois inteiros X (1 ≤ X ≤ N) e R (0 ≤ R ≤ 50). Caso seja 3 ou 4, será seguido por apenas mais um inteiro X.

// Saída
// Para cada operação do tipo 3 ou 4, seu programa deve produzir uma linha, contendo o valor da resposta correspondente. Se uma linha ou coluna tiver dois ou mais valores que se repetem o mesmo número de vezes, você deve imprimir o maior deles. Por exemplo, se uma linha tem os valores [5,7,7,2,5,2,1,3], tanto o 2, 5 e 7 se repetem duas vezes, então a resposta será 7, pois é o maior deles.     

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;

public class TabuleiroSecreto {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String[] readLineSplit;
    Table table;
    int tableSize;
    int operationsQuantity;
    int operation;
    int x;
    int r;
    readLineSplit = br.readLine().split(" ");
    tableSize = Integer.parseInt(readLineSplit[0]);
    operationsQuantity = Integer.parseInt(readLineSplit[1]);
    table = new Table(tableSize);
    for (int i = 0; i < operationsQuantity; i++) {
      readLineSplit = br.readLine().split(" ");
      if (readLineSplit.length == 3) {
        operation = Integer.parseInt(readLineSplit[0]);
        x = Integer.parseInt(readLineSplit[1]);
        r = Integer.parseInt(readLineSplit[2]);
        if (operation == 1) {
          table.updateRow(x, r);
        } else if (operation == 2) {
          table.updateColumn(x, r);
        }
      } else if (readLineSplit.length == 2) {
        operation = Integer.parseInt(readLineSplit[0]);
        x = Integer.parseInt(readLineSplit[1]);
        if (operation == 3) {
          System.out.println(table.printFrequentValueRow(x));
        } else if (operation == 4) {
          System.out.println(table.printFrequentValueColumn(x));
        }
      }
    }
  }

  static class Table {

    private final int tableSize;
    private final int[][] table;
    private int maxKey;
    private int maxValue;

    public Table(int tableSize) {
      this.tableSize = tableSize;
      this.table = new int[tableSize][tableSize];
      this.maxKey = 0;
      this.maxValue = 0;
    }

    public void updateRow(int x, int r) {
      for (int i = 0; i < this.tableSize; i++) {
        this.table[x - 1][i] = r;
      }
    }

    public void updateColumn(int x, int r) {
      for (int i = 0; i < this.tableSize; i++) {
        this.table[i][x - 1] = r;
      }
    }

    public int printFrequentValueRow(int x) {
      HashMap<Integer, Integer> listMap = new HashMap<>();
      this.maxKey = 0;
      this.maxValue = 0;
      int r, v;
      for (int i = 0; i < this.tableSize; i++) {
        r = this.table[x - 1][i];
        if (listMap.containsKey(r)) {
          v = listMap.get(r) + 1;
          listMap.put(r, v);
          setMaxEntry(r, v);
        } else {
          listMap.put(r, 1);
          setMaxEntry(r, 1);
        }
      }
      return getMaxKey();
    }

    public int printFrequentValueColumn(int x) {
      HashMap<Integer, Integer> listMap = new HashMap<>();
      this.maxKey = 0;
      this.maxValue = 0;
      int r, v;
      for (int i = 0; i < this.tableSize; i++) {
        r = this.table[i][x - 1];
        if (listMap.containsKey(r)) {
          v = listMap.get(r) + 1;
          listMap.put(r, v);
          setMaxEntry(r, v);
        } else {
          listMap.put(r, 1);
          setMaxEntry(r, 1);
        }
      }
      return getMaxKey();
    }

    private void setMaxEntry(int key, int value) {
      if (value > this.maxValue) {
        this.maxValue = value;
        this.maxKey = key;
      } else if (value == this.maxValue) {
        if (key > this.maxKey) {
          this.maxKey = key;
        }
      }
    }
    private int getMaxKey() {
      return this.maxKey;
    }
  }
}
