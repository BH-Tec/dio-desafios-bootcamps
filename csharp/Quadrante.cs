/*
Desafio
O plano cartesiano é feito por uma quantidade indeterminada de pontos.
Ele é composto por quatro quadrantes como mostra a imagem abaixo.
Desenvolva um programa que, dada as coordenadas de entrada (x, y), verifique em
qual quadrante está situado o ponto.
Definição e Exercícios de Plano Cartesiano - Toda Matéria
Caso uma das coordenadas seja NULA, o programa deve parar.

Entrada
As entradas serão 2 valores inteiros.

Saída
Para cada caso de teste mostre em qual quadrante do sistema cartesiano se
encontra a coordenada lida, conforme o exemplo.
*/
using System; 

namespace {
    public static class Program {
        public static void Main() {
            int X, Y;
            while (true) {
                string[] s = Console.ReadLine().Split(' ');
                X = int.Parse(s[0]);
                Y = int.Parse(s[1]);
                //TODO: Crie as condições para satisfazer o problema
                if(X == 0|| Y == 0) break ; 
                if (X > 0 && Y>0) Console.WriteLine("primeiro");
                else if (X < 0 && Y > 0) Console.WriteLine("segundo");      
                else if (X < 0 && Y <0) Console.WriteLine("terceiro");
                else  Console.WriteLine("quarto");
            }
        }
    }
}