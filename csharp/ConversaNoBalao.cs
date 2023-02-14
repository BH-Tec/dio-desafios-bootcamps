// Desafio
// Durante o desenvolvimento de um jogo, você precisa verificar se a conversa com um dos personagens vai caber no balão desenvolvido pelo artista. Para isso, você resolveu desenvolver um programa vai ler cada caractere das frases, incluindo pontuação e espaços, e verificar se elas possuem 45 ou menos caracteres.

// Entrada
// A entrada vão ser frases de tamanhos variados. Lembrando que não há diferença entre maiúsculas e minúsculas.

// Saída
// A saída deve ser o espaço é suficiente ou não utilizando os 45 caracteres determinado pelo artista.

// Exemplo
// Input  	  Output  
// "Ola, jogador. Bem-vindo a minha loja"       	       "Suficiente"       
// “Jogador, preciso que você me faça um favor. Tem um
// rato imenso na minha cozinha, mate-o por favor!”	       "Nao suficiente"       

// Para ler e escrever dados em C#, utilizamos os seguintes métodos da classe Console: 
// - Console.ReadLine: lê UMA linha com dado(s) de Entrada (Inputs) do usuário;
// - Console.WriteLine: imprime um texto de Saída (Output) e pulando uma linha.  
// - O método .Length verifica o tamanho de uma cadeia de caracteres (espaços e pontuação contam)

using System;
                    
public class Program {
  public static void Main() {
    string fraseDeEntrada = Console.ReadLine();
    
    //TODO: crie a condição necessaria, utilizando if - else, para resolver o problema;
    if (fraseDeEntrada.Length <= 45) {
        Console.WriteLine("Suficiente");
    }
    else {
        Console.WriteLine("Nao suficiente");
    }
  }
}