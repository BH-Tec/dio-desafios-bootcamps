// Seu Júlio é proprietário de um grande apiário situado no interior da Paraíba. Todo ano, semestralmente, seu Júlio coleta o mel produzido pelas abelhas da sua propriedade e armazena-o em um recipiente de formato CILÍNDRICO para que facilite o transporte do mel para os estabelecimentos que encomendam esse produto natural para a comercialização.
// Certa vez seu Júlio percebeu que devido a um crescimento na produção do mel, em relação ao semestre anterior, o recipiente que possuia não suportaria o volume de mel produzido por suas abelhas. Seu Júlio precisa agora que você faça um programa que informado o volume de mel em cm3 e o diâmetro da parte interna do recipiente em cm, calcule e mostre:

// - Qual deve ser a altura(em cm) da parte interna do recipiente;
// - A área(em cm2) da boca(entrada) do recipiente.
// Obs.: Considere π = 3.14

// Entrada
// A entrada contém vários casos de teste e termina com EOF. Cada caso de teste consiste de duas linhas contendo em cada uma um valor de ponto flutuante de dupla precisão com duas casas decimais após a vírgula, sendo um V (1.00 ≤ V ≤ 10000.00) e outro D (1.00 ≤ D ≤ 100.00), representando respectivamente o volume e o diâmetro do recipiente.

// Saída
// Para cada teste, a saída contém na primeira linha a mensagem "ALTURA = ", com um espaço depois de ALTURA e outro depois do símbolo de igualdade, seguido do valor da altura do recipiente com duas casas decimais após a vírgula e na segunda linha a mensagem "AREA = ", também com um espaço depois de AREA e outro depois do símbolo de igualdade, seguido do valor da area da boca(entrada) do recipiente com duas casas decimais após a vírgula.

// - Não esqueça da quebra de linha ao final da saída,caso contrário você receberá "Presentation Error".

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.Scanner;

public class ReservatorioDeMel {

  public static void main(String[] args) throws IOException {
    Scanner scanner = new Scanner(System.in);

    DecimalFormat decimalFormat = new DecimalFormat("0.00");
    double volume;
    double area;
    double altura;
    double raio;
    double diametro;

    while (scanner.hasNext()) {
      volume = scanner.nextDouble();
      diametro = scanner.nextDouble();

      raio = diametro / 2;
      area = 3.14 * raio * raio;
      altura = volume / area;

      System.out.println("ALTURA = " + decimalFormat.format(altura));
      System.out.println("AREA = " + decimalFormat.format(area));
    }
  }
}