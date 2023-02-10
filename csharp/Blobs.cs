/*
Desafio
No planeta Alpha vive a criatura Blobs, que come precisamente 1/2 de seu
suprimento de comida disponível todos os dias. Escreva um algoritmo que leia a
capacidade inicial de suprimento de comida, e calcule quantos dias passarão
antes que Blobs coma todo esse suprimento até restar um quilo ou menos.

Entrada
A primeira linha de entrada contem um único inteiro N (1 ≤ N ≤ 1000), indicando
o número de casos de teste. As N linhas seguintes contém um valor de ponto
flutuante C (1 ≤ C ≤ 1000) correspondente à quantidade de comida disponível para
Blobs.

Saída
Para cada caso de teste, imprima uma linha contendo o número de dias que Blobs
irá demorar para comer todo seu suprimento de comida, seguido da palavra "dias".
*/

using System;

namespace Blobs {
    public static class Uri {
        public static void Main() {
            var total = int.Parse(Console.ReadLine());
            for (var i = 0; i < total; i++) {
                var value = double.Parse(Console.ReadLine());
                var count = 0;
                while (value > 1) {
                    value /= 2;
                    count++;
                }
                Console.WriteLine($"{count} dias");
            }
        }
    }
}