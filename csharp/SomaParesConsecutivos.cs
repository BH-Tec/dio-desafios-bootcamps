// Desafio
// O programa deve ler um valor inteiro D indefinidas vezes, ele só irá parar quando o valor de D for igual a 0. Para cada D lido, imprima a soma dos 5 pares consecutivos a partir de D, inclusive ele mesmo , se for par. Se o valor de entrada for 4, por exemplo, a saída deve ser 40, que é o resultado da operação: 4+6+8+10+12, enquanto que se o valor de entrada for 11, por exempo, a saída deve ser 80, que é a soma de 12+14+16+18+20.

// Entrada
// O arquivo de entrada contém muitos valores inteiros. O último valor do arquivo é zero.

// Saída
// Imprima a saida conforme a explicação acima e o exemplo abaixo.

using System;

namespace DIO {
  class Program {
    static void Main(string[] args) {
      int x;
      do {
        x = int.Parse(Console.ReadLine());

        if (x == 0) {
          break;
        }

        int soma = 0;

        for (int i = 0; i < 5; i++) {
          if (x % 2 != 0) {
            x++;
          }
          soma += x;
          x += 2;
        }

        Console.WriteLine(soma);
      } while (x != 0);
    }
  }
}