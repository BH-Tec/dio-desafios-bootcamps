// Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

// Entrada
// A entrada contém um único valor inteiro.

// Saída
// Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

using System;

namespace Mes {
    class Program {
        static void Main(string[] args) {
            int mes;

            mes = int.Parse(Console.ReadLine());

            if ( mes == 1) {
                Console.WriteLine("January");
            }
            else if ( mes == 2) {
                Console.WriteLine("February");
            }
            else if ( mes == 3) {
                Console.WriteLine("March");
            }
            else if ( mes == 4) {
                Console.WriteLine("April");
            }
            else if ( mes == 5) {
                Console.WriteLine("May");
            }
            else if (mes == 6) {
                Console.WriteLine("June");
            }
            else if (mes == 7) {
                Console.WriteLine("July");
            }
            else if (mes == 8) {
                Console.WriteLine("August");
            }
            else if (mes == 9) {
                Console.WriteLine("September");
            }
            else if (mes == 10) {
                Console.WriteLine("October");
            }
            else if (mes == 11) {
                Console.WriteLine("November");
            }
            else {
                Console.WriteLine("December");
            }
        }
    }
}