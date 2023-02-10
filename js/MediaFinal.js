// Desafio 1
// Faça um programa que receba:
// Caso a média seja < 5 imprima "Reprovado";
// Caso a média seja >= 5 e < 7 imprima "Recuperação";
// Caso a média seja >7 imprima "Aprovado".

let media = gets();

if (media < 5) {
  print("Reprovado");
} else if (media < 7) {
  print("Recuperação");
} else if (media > 7) {
  print("Aprovado");
}
