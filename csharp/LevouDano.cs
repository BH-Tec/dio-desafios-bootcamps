// Desafio
// O programador Jr. recém contratado para o seu time já está super empolgado e envolvido em um projeto. O que ele precisa fazer é verificar se o jogador que caiu em uma armadilha levou um dano. Porém, ele não sabe muito bem como fazer isso e pediu a sua ajuda. Você como um bom líder, foi ao socorro para ensina-lo.

// Entrada
// A entrada serão os dados do jogador respectivamente: Se ele tomou levou dano (true ou false) representado, respectivamente, por 1 e 0.

// Saída
// A saída deve ser um print na tela se o jogador conseguiu continuar a jogar ou se deu game over.

// Exemplo
// Input  	  Output  
// 0   	  “Jogador continua a jogar”
// 1   	             “Game over” 

// Para ler e escrever dados em C#, utilizamos os seguintes métodos da classe Console: 
// - Console.ReadLine: lê UMA linha com dado(s) de Entrada (Inputs) do usuário;
// - Console.WriteLine: imprime um texto de Saída (Output) e pulando uma linha.  

using System;

public class Program
{
  public static void Main()
  {
    //TODO: Utilizando a estrutura If - Else, crie as condições necessárias para resolver o problema;
    int dano = int.Parse(Console.ReadLine());
    if (dano == 1) {
      Console.WriteLine("Game over");
    }
    else {
      Console.WriteLine("Jogador continua a jogar");
    }
  }
}