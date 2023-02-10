// Desafio
// Odin criou para Thor a mais fiel e poderosa arma possível, o martelo Mjölnir.
// Feito de um minério místico especial chamado Uru e forjado no coração de uma estrela pelos Deuses ferreiros de Asgard, Brokk e Eitri, os lendários ferreiros.
// Um dia, Thor desafiou seus amigos para ver quem conseguia levantar o Mjölnir.
// Escreva um programa que, dado um nome, e a força, em Newtons, aplicado ao tentar levantar o Mjölnir, informar se a pessoa conseguiu ou não levantá-lo.

import java.util.Scanner;

public class Mjolnir {
    public static void main(String[] args){
		Scanner leitor = new Scanner(System.in);
		int c = leitor.nextInt();
		String nome;
		int n;

		for (int i = 0; i < c; i++) {
			nome = leitor.next();
			n = leitor.nextInt();
			if (nome.equals("Thor")) {
                System.out.println("Y");
            } else {
                System.out.println("N");
            }
		}
    }	
}
