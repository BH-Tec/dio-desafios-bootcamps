// Descrição
// você é um jovem engenheiro de software recém-contratado pela empresa "TechCloud". Sua equipe é responsável por desenvolver aplicativos e serviços que serão implantados na Amazon Web Services (AWS), a principal plataforma de computação em nuvem do mercado.

// Sua primeira tarefa é desenvolver um programa simples em Java que auxilie os desenvolvedores a calcular os custos de execução de seus aplicativos na AWS. Para isso, você precisa coletar algumas informações e aplicar uma fórmula para determinar o custo total.

// Aqui está como você pode realizar essa missão:

// 1. Defina as taxas:

// O custo por hora de um servidor é de R$ 0,15.
// O custo por hora de um banco de dados é de R$ 0,05.
// 2. Coletando informações:

// O programa deve solicitar ao usuário a quantidade de servidores e a quantidade de bancos de dados que o aplicativo necessita para funcionar corretamente.
// 3. Calcule os custos:

// Multiplique a quantidade de servidores pelo custo por hora de um servidor e a quantidade de bancos de dados pelo custo por hora de um banco de dados. Some esses valores para obter o custo total.
// 3. Calcule os custos:

// Multiplique a quantidade de servidores pelo custo por hora de um servidor e a quantidade de bancos de dados pelo custo por hora de um banco de dados. Some esses valores para obter o custo total.
// 4. Exiba o resultado:

// Mostre ao usuário o custo total do uso da AWS para executar o aplicativo durante uma hora.
// Entrada
// O programa deverá receber duas entradas, a primeira será referente a quantidade de servidores necessários. A segunda entrada será referente a quantidade de banco de dados necessários.

// Obs: Utilize a função Scanner para capturar as entradas do usuário.

// Saída
// A saída deverá retornar um texto informando o custo total de uso da AWS por hora. Veja exemplos abaixo.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

import java.util.Scanner;

public class CalculandoCustosAWS {
    public static void main(String[] args) {
        // Definindo as taxas
        double custoPorHoraServidor = 0.15;
        double custoPorHoraBancoDados = 0.05;

        // Criando um objeto Scanner para receber as entradas do usuário
        Scanner scanner = new Scanner(System.in);

        // Recebendo as informações do usuário
        int quantidadeServidores = scanner.nextInt();

        int quantidadeBancosDados = scanner.nextInt();

        // Calculando os custos
        double custoTotalServidores = custoPorHoraServidor * quantidadeServidores;
        double custoTotalBancosDados = custoPorHoraBancoDados * quantidadeBancosDados;
        double custoTotal = custoTotalServidores + custoTotalBancosDados;

        // Exibindo o resultado
        System.out.printf("Custo total de uso da AWS por hora: R$ %.2f%n", custoTotal);

        // Fechando o Scanner
        scanner.close();
    }
}
