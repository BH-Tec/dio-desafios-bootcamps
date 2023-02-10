/*
Desafio
Escreva um algoritmo que leia 2 valores inteiros A e B calcule a soma dos
números que não são múltiplos de 13 entre A e B, incluindo ambos.

Entrada
O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em
ordem crescente.

Saída
Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores
lidos na entrada, inclusive ambos se for o caso.
*/

using System;

namespace MultiplosDe13 {
    class Program {
        static void Main(string[] args) {
            int x = int.Parse(Console.ReadLine());
            int y = int.Parse(Console.ReadLine());
            int menor = x;
            int maior = y;
            //Verifica as condições entre o maior e menor.
            if (x > y) {
                menor = y;
                maior = x;
            }
                int total = 0;
                //Calcula os valores 
                for (int i = menor; i <= maior; i++) {
                    //Verifica os valores que não são divisíveis por 13
                    if (i % 13 != 0) {
                    total = total + i;
                    }                    
                }
            Console.WriteLine(total);
        }
    }
}