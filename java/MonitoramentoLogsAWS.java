// Descrição
// Neste desafio, você deve criar um programa em Java para realizar o monitoramento e análise de logs gerados na infraestrutura da AWS (Amazon Web Services). O programa receberá informações de eventos de diferentes serviços da AWS e realizará uma análise simples desses logs.

// Entrada
// O programa solicitará ao usuário que insira a quantidade de logs a serem analisados.
// Em seguida, para cada log, o usuário deve fornecer as informações no seguinte formato: "data, hora, serviço AWS e descrição do evento".
// Obs: Utilize a função Scanner para receber as entradas.

// Saída
// O programa exibirá os resultados da análise, apresentando:

// A quantidade de eventos específicos para cada serviço AWS.
// O serviço AWS que teve a maior quantidade de eventos registrados
// O serviço AWS que teve a menor quantidade de eventos registrados
// Veja exemplos abaixo.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class MonitoramentoLogsAWS {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Map<String, Integer> eventosPorServico = new HashMap<>();
        String maiorServico = "";
        String menorServico = "";

        int quantidadeLogs = scanner.nextInt();
        scanner.nextLine();

        for (int i = 0; i < quantidadeLogs; i++) {
            String[] logInfo = scanner.nextLine().split(",");

            if (logInfo.length != 3) {
                continue;
            }
            String servico = logInfo[1].trim();
            eventosPorServico.put(servico, eventosPorServico.getOrDefault(servico, 0) + 1);
        }

        int maxEventos = -1;
        int minEventos = Integer.MAX_VALUE;

        for (Map.Entry<String, Integer> entry : eventosPorServico.entrySet()) {
            int eventos = entry.getValue();
            if (eventos >= maxEventos) {
                maxEventos = eventos;
                maiorServico = entry.getKey();
            }
            if (eventos < minEventos) {
                minEventos = eventos;
                menorServico = entry.getKey();
            }
        }

        System.out.println("Eventos por servico:");
        eventosPorServico.forEach((servico, eventos) -> System.out.println(servico + ":" + eventos));

        System.out.println("Maior:" + maiorServico);
        System.out.println("Menor:" + menorServico);
        scanner.close();
    }
}
