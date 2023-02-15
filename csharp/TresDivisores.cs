// Desafio
// Dado um inteiro n, retorne true se n tiver exatamente três divisores positivos. Caso contrário, retorne false. O inteiro m é um divisor de n, se existe um inteiro k tal que n = k * m. 

// Entrada
// O arquivo de entrada consiste em um inteiro n que será validada caso esteja sob as condições do desafio.

// Saída
// A saída consistirá em um tipo booleano: true ou false.

using System;

class Solution {
  public static void Main(string[] args) {
    int n = int.Parse(Console.ReadLine());
    int count = 0;
    // TODO: Crie as outras condições necessárias para a resolução do desafio:
    for (int i = 1; i <= n; i++) {
      if (n % i == 0) {
        count++;
      }
      if (count > 3) {
        Console.WriteLine(false);
        return;
      }
    }
    Console.WriteLine(count == 3);
  }
}
