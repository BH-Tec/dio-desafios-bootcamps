// Desafio
// Você e sua equipe estão finalizando um jogo. Porém, ele está muito pesado e você sabem que é devido a grande parte dos Assets (recursos que compõem o jogo) não utilizados mas que ainda estão na pasta. O artista disse que nomeou tudo que estava sendo usado como “_usado”, portanto, você pensou em criar um programa que encontrasse e deletasse todos os arquivos que não tivessem esse sufixo.

// Entrada
// A entrada serão strings que possuirão, ou não, o sufixo “_usado”.

// Saída
// Caso o arquivo tenha “_usado” como sufixo, print no console “Contem, mantido”. Caso não tenha, print “Não contem, deletado”.

// Exemplo
// Input  	                                          Output  
// "Ola, jogador. Bem-vindo a minha loja"       	    “Nao contem, deletado”     
// “heroi_usado.png”	                                “Contem, mantido”       
// “Arbusto.png”	                                    “Nao contem, deletado”

// Para ler e escrever dados em C#, utilizamos os seguintes métodos da classe Console: 
// - Console.ReadLine: lê UMA linha com dado(s) de Entrada (Inputs) do usuário;
// - Console.WriteLine: imprime um texto de Saída (Output) e pulando uma linha.  
// - O método .Contains() Retorna um valor que indica se um caractere, ou uma frase, 
// específica ocorre em uma String (cadeia de caracteres).

using System;
                    
public class Program {
  public static void Main() {
    string fraseDeEntrada = Console.ReadLine();
    //TODO: crie a condição necessaria, utilizando if - else, para resolver o problema;
    if (fraseDeEntrada.Contains("_usado")) {
      Console.WriteLine("Contem, mantido");
    } else {
      Console.WriteLine("Nao contem, deletado");
    }
  }
}