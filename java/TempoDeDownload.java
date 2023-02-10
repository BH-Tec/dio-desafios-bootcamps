// Desafio
// Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps). Calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos). 

// Entrada  
// Você receberá duas entradas que representam o tamanho do arquivo para download em MB e a velocidade de um link para Internet em Mbps. 

// Saída
// A saída será o tempo aproximado de download do arquivo em minutos. 

import java.util.Scanner;

public class TempoDeDownload {

  public static void main(String[] Args) {

    Scanner sc = new Scanner(System.in);
    double tmhMB = sc.nextFloat();
    double tmhMbps = sc.nextFloat();
    double tempo = tmhMB / tmhMbps;

    tempo = tempo / 60;
    // TODO: Calcule o tempo aproximado de download:
    System.out.printf("%.2f", tempo);

    // TODO: Imprima o calculo do tempo, leve em consideração que a saída é um
    // numero com duas casas decimais:
  }
}