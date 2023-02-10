// Desafio
// Faça um programa com as características abaixo:
// Leia 10 nomes, sem espaço em branco;
// Imprima o terceiro nome da lista;
// Imprima o sétimo nome da lista;
// Imprima o nono nome da lista.

import java.util.Scanner;
import java.util.Locale;

public class EntradaSaidaLendoEPulandoNomes {
	public static void main(String[] args) {
		Locale.setDefault(new Locale("en", "US"));
		Scanner sc = new Scanner(System.in);
		
		String[] a = new String[10];
		for(int i=0 ; i<10 ; i++)
			a[i] = sc.nextLine();
		System.out.printf("%s\n%s\n%s\n",a[2],a[6],a[8]);
		sc.close();
	}
}
