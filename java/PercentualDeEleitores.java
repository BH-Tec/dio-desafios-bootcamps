// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcule e imprima o percentual que cada um representa em relação ao total de eleitores.

// Exemplo 1

// Entrada
// 1000
// 100
// 150
// 750	
// Saída
// Brancos: 10%
// Nulos: 15%
// Validos: 75%

// Abaixo segue um exemplo de código que você pode ou não utilizar
import java.util.Scanner;

public class PercentualDeEleitores {
  public static void main(String[] args) {
    Scanner input = new Scanner(System.in);
    int habitantes = input.nextInt();
    int brancos = input.nextInt();
    int nulos = input.nextInt();
    int validos = input.nextInt();
    int pBrancos = (brancos * 100) / habitantes;
    int pNulos = (nulos * 100) / habitantes;
    int pValidos = (validos * 100) / habitantes;

    System.out.println("Brancos: " + pBrancos + "%");
    System.out.println("Nulos: " + pNulos + "%");
    System.out.println("Validos: " + pValidos + "%");
  }
}
