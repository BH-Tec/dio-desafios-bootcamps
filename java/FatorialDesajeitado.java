// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n.
// Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por
// uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'.
// Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
// Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas.
// Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11.
// Dado um inteiro N, retorne o fatorial desajeitado de n.

import java.util.*;

public class FatorialDesajeitado {
    public static void main(String[] args) {
        int n = Integer.parseInt(new Scanner(System.in).nextLine());
        int res = 0;
        int cnt = 1;
        int tmp = n;
        n--;

        while (n > 0) {
            tmp *= n;
            n--;
            if(n != 0){
                tmp /= n;
                n--;
            }
            tmp += n;
            n--;
            res += tmp;
            tmp = -n;
            if (n == 1 ){
                res += tmp;
            }   
            n--;
        }  
        System.out.println(res);
    }
}
