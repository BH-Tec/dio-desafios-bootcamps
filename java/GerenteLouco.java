// Desafio
// O gerente de uma loja de produtos eletrodomésticos ficou maluco e decidiu que todos o produtos da loja estavam na promoção com 70% de desconto. Ele percebeu que precisa automatizar o seu sistema para que nessas promoções o novo preço seja automaticamente calculado e repassado para os vendedores. Faça um algoritmo que leia o desconto e o preço de um produto e e mostre o seu novo preço com esse desconto.

// Abaixo segue um exemplo de código que você pode ou não utilizar
import java.util.Scanner;

public class GerenteLouco {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // Lê o desconto em porcentagem
        int desconto = sc.nextInt();
        // Lê o preço antigo do produto
        double precoAntigo = sc.nextDouble();
        // Calcula o preço novo com o desconto aplicado
        double precoNovo = precoAntigo * (1 - desconto / 100.0);
        // Imprime o novo preço com duas casas decimais
        System.out.printf("%.0f%n", precoNovo);
    }
}

