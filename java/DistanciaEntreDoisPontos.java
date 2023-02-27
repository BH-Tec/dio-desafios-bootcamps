// Desafio
// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, conforme a fórmula:

// Entrada
// O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

// Saída
// Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

// implemente sua solução aqui
import java.util.Scanner;

public class DistanciaEntreDoisPontos {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    double x1, y1, x2, y2;
    x1 = sc.nextDouble();
    y1 = sc.nextDouble();
    x2 = sc.nextDouble();
    y2 = sc.nextDouble();

    // Calcula o valor da distância usando a fórmula
    double distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    // Com 4 casas após o ponto decimal
    System.out.println(String.format("%.4f", distancia));
  }
}