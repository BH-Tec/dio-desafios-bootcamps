// Desafio
// Elabore um programa que simule uma fila de atendimento bancário.
// O programa deve ler o nome de 3 pessoas (clientes do banco), armazenando-os em uma fila.

import java.util.Scanner;

public class FilaDoBanco {
  public static void main(String[] args) { 
    String[] nomesFila = new String[3];
    Scanner nome = new Scanner(System.in);
    //TODO: Implemente uma condição que simule uma fila bancaria, gerando o nome a posição do cliente na fila:
    for(int i = 0; i < nomesFila.length; i++) {
        nomesFila[i] = nome.next(); 
    }
    for(int i = 0; i < nomesFila.length; i++) {
        int posicao = i+1;
        System.out.println(nomesFila[i] + " - esta na posicao: " + posicao);
    }
  }
}
