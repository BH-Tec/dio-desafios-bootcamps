// Desafio
// Você terá o desafio de escrever um programa que leia um valor inteiro N (1 < N < 1000). Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

// Entrada
// O arquivo de entrada contém um número inteiro positivo N.

// Saída
// Imprima a saída conforme o exemplo fornecido.

using System;

namespace DIO {
    class Program {
        static void Main(string[] args) {
            int n = int.Parse(Console.ReadLine());

            for (int i = 1; i <= n; i++) {
                int quadrado = i * i;
                int cubo = i * i * i;
                Console.Write(i + " " + quadrado + " " + cubo);
                Console.WriteLine();
            }
        }
    }
}
