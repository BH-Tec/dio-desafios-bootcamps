// Desafio
// A prefeitura da cidade B, inspirada por uma cidade A, decidiu implementar um sistema de câmeras que iria verificar se os carros estão acima de 80km/h. Porém, eles queriam também anotar a placa dos carros no banco de dados para que, a partir de 3 multas, os motoristas perdessem pontos diretamente na carteira de habilitação. Para isso, contrataram você para realizar esse programa, logo que você fez um trabalho tão bom para a cidade A.

// Lembrando que toda vez que um carro é pego pela câmera e está acima da velocidade permitida automaticamente já é contabilizado uma multa para ele.

// Entrada
// A entrada será a velocidade que o veículo está e quantas multas ele já recebeu. Se ele estiver acima da velocidade, deve ser somado mais uma multa.

// Saida
// A saída deverá ser quantas multas o motorista já tem e se ele irá receber pontuação na carteira de habilitação.

import java.util.Scanner;

public class PontosNaCarteira {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int velocidade, multas, novasMultas;
        
        velocidade = input.nextInt();
        multas = input.nextInt();
        
        novasMultas = velocidade > 80 ? multas + 1 : multas;
        
        if (novasMultas >= 3) {
            System.out.println("3 multas. Levou pontos na carteira");
        } else {
            System.out.println(+ novasMultas + " multas. Nao levou pontos na carteira");
        }
    }
}
