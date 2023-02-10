// Desafio
// Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo (soma de todos os lados) e apresente a mensagem:

// Perimetro = XX.X

// Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem:

// Area = XX.X

// Fórmula da área de um trapézio: AREA = ((A + B) x C) / 2

// Entrada
// A entrada contém três valores reais.

// Saída
// O resultado deve ser apresentado com uma casa decimal.

import java.util.Scanner;

public class Triangulo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double a = scan.nextDouble();
        double b = scan.nextDouble();
        double c = scan.nextDouble();
        scan.close();
        
        if (a + b > c && a + c > b && b + c > a) {
            double perimetro = a + b + c;
            System.out.println("Perimetro = " + perimetro);
        } else {
            double area = ((a + b) * c) / 2;
            System.out.println("Area = " + area);
        }
    }
}