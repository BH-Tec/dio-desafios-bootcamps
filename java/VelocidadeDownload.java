// Desafio
// Você foi contratado como desenvolvedor pela "DIOCloudTech Solutions", que é especializada em serviços em nuvem baseados na AWS. E sua tarefa será criar uma calculadora de velocidade de download que leve em consideração a localização geográfica do servidor de origem e do dispositivo do usuário. Quanto mais próximo o servidor, menor será a latência e, portanto, a velocidade de download será melhor. Isso permitirá que os usuários estimem a velocidade de download para diferentes locais e servidores AWS em todo o mundo.

// Fórmula para Cálculo da Velocidade de Download (em Mbps): A velocidade de download estimada (VD) será dada pela fórmula:

// VD = VelocidadePlano / (1 + (DistanciaServidores / 100))

// Observação:

// A velocidade de download estimada não pode exceder a velocidade do plano de internet contratado.
// Entrada
// O programa deve ser capaz de receber dois valores:

// Distância física entre o servidor de origem e o dispositivo do usuário (em quilômetros).
// Velocidade do plano de internet contratado pelo usuário (em Mbps).
// Saída
// A calculadora deve fornecer a estimativa da velocidade de download (em Mbps) com base na fórmula de cálculo que considera a distância física e a velocidade do plano de internet. 

import java.util.Scanner;

public class VelocidadeDownload {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    // Solicitar a entrada do usuário para a distância física e a velocidade do
    // plano de internet
    double distanciaServidores = scanner.nextDouble();
    double velocidadePlano = scanner.nextDouble();

    // Calcular a velocidade de download estimada
    double velocidadeDownloadEstimada = calcularVelocidadeDownload(distanciaServidores, velocidadePlano);

    // Apresentar o resultado
    System.out.println("\nVelocidade de Download Estimada: " + String.format("%.2f", velocidadeDownloadEstimada) + " Mbps");

    scanner.close();
  }

  public static double calcularVelocidadeDownload(double distanciaServidores, double velocidadePlano) {
    // Calcular a velocidade de download estimada usando a fórmula
    double velocidadeDownloadEstimada = velocidadePlano / (1 + (distanciaServidores / 100));
    
    // Certificar-se de que a velocidade estimada não exceda a velocidade do plano
    if (velocidadeDownloadEstimada > velocidadePlano) {
        return velocidadePlano;
    }
    
    return velocidadeDownloadEstimada;
  }
}

