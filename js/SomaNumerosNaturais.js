// Desafio
// Um número natural é um inteiro não-negativo (0, 1, 2, 3, 4, 5,...). A sua tarefa neste problema é calcular a soma dos números naturais que estão presentes em um determinado intervalo [A, B] inclusive.

// Por exemplo, a soma dos números naturais no intervalo [2, 5] é 14 = (2+3+4+5).

// Entrada
// Cada caso de teste contém dois inteiros A e B (1 ≤ A ≤ B ≤ 109), representando o limite inferior e o superior respectivamente.

// Saída
// Para cada caso de teste, a saída consiste de uma linha contendo a soma dos números naturais do intervalo.
const A = parseInt(gets());
const B = parseInt(gets());
const total = ((A + B) * (B / 2));

print(total);
