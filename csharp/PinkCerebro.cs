// Desafio
// Pink e Cérebro dividem um apartamento e estão juntos 24h por dia desde o começo da pandemia. Para passar o temp, Pink cria problemas matemáticos para Cérebro resolver, o último deles foi uma lista de números com a seguinte pergunta: quantos números da lista são múltiplos de 2, 3, 4 e 5?

// Apesar de parecer simples, porém, quando a lista contém muitos números, Cérebro se confunde e acaba errando alguns cálculos.

// Ajude Cérebro a resolver o desadio de Pink.

// Entrada
// A primeira linha da entrada consiste em um inteiro N (1 ≤ N ≤1000), representando a quantidade de números na lista de Pink.

// A segunda linha contém N inteiros Li (1 ≤ Li ≤ 100), representando os números da lista de Pink.

// Saída
// Imprima a quantidade de números múltiplos de 2, 3, 4 e 5 presentes na lista. Observe a formatação da saída nos exemplos, pois ela deve ser seguida rigorosamente.
//Abaixo segue um exemplo de código que você pode ou não utilizar
using System; 

class minhaClasse {

    static void Main(string[] args) { 

        int suavariavel = int.Parse(Console.ReadLine());
        string[] n      = Console.ReadLine().Split(' ');

        int multiplo2   = 0;
        int multiplo3   = 0;
        int multiplo4   = 0;
        int multiplo5   = 0;
        //TODO: Complete os espaços em branco com uma possível solução para o desafio
        for (int i = 0; i < n; i++) {
              int numero = int.Parse(lista[i]);
              if (numero % 2 == 0) {
                  multiplo2++;
              }
              if (numero % 3 == 0) {
                  multiplo3++;
              }
              if (numero % 4 == 0) {
                  multiplo4++;
              }
              if (numero % 5 == 0) {
                  multiplo5++;
              }
          }

        Console.WriteLine("{0} Multiplo(s) de 2", multiplo2);
        Console.WriteLine("{0} Multiplo(s) de 3", multiplo3);
        Console.WriteLine("{0} Multiplo(s) de 4", multiplo4);
        Console.WriteLine("{0} Multiplo(s) de 5", multiplo5);
    }