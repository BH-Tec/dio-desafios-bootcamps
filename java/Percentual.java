// Desafio
// O gerente de uma loja resolveu aplicar descontos em todos os seus produtos!
// A tarefa é calcular a Porcentagem de Desconto aplicada a esses produtos. 

import java.util.*;

public class Percentual{

public static void main(String args[]) {
    Scanner input = new Scanner(System.in);
		
    int M = input.nextInt();
    int S = input.nextInt();  
    
    //TODO:  Retorne o percentual de desconto que foi aplicado no produto
    int valorDescontado = M - S;

    int percentualDeDesconto = (valorDescontado * 100) / M;

    System.out.println("O desconto foi de " + percentualDeDesconto + "%");
}
}