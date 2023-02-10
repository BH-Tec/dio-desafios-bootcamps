// Desafio
// Cada pizza é composta por 4 fatias. Há N amigos e cada amigo precisa de exatamente X fatias.
// Você deverá criar um código capaz de calcular o número mínimo de pizzas que eles devem pedir para satisfazer seu apetite.

import java.util.Scanner;

public class QuantidadeNecessaria {
    public static void main(String[] args) {
        final int SLICE = 4;
        Scanner scanner = new Scanner(System.in);

        int N = scanner.nextInt();

            // TODO: Retorne o número de pizzas necessárias para atender o pedido. 
            for(int i = 1; i <= N; i++) {
                double amigos = scanner.nextInt() * scanner.nextInt();
                double nPizzas = Math.ceil(amigos / SLICE);

                System.out.println((int)nPizzas);
            }
            scanner.close();
        }
}
