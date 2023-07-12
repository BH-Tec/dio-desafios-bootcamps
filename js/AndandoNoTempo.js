// Desafio

// Imagine o seguinte cenário, você desenvolveu uma máquina de  teletransporte no tempo que pode ser usada no máximo três vezes, e a cada uso da máquina você pode escolher ir para o futuro ou voltar para o passado. A máquina possui três créditos fixos; cada crédito representa uma certa quantidade de anos, e pode ser usado para ir essa quantidade de anos para o passado ou para o futuro. Você pode fazer uma, duas ou três viagens, e cada um desses três créditos pode ser usado uma vez apenas. Por exemplo, se os créditos forem 5, 12 e 9, você poderia decidir fazer duas viagens: ir 5 anos para o futuro e, depois, voltar 9 anos para o passado. Dessa forma, você terminaria quatro anos no passado, em 2012. Também poderia fazer três viagens, todas indo para o futuro, usando os créditos em qualquer ordem, terminando em 2042.

// Neste desafio, dados os valores dos três créditos da máquina, seu programa deve dizer se é ou não possível viajar no tempo e voltar para o presente, fazendo pelo menos uma viagem e, no máximo, três viagens; sempre usando cada um dos três créditos no máximo uma vez.

// Entrada
// A entrada consiste de uma linha contendo os valores dos três créditos A, B e C (1 ≤ A, B, C ≤ 1000).

// Saída
// Seu programa deve imprimir uma linha contendo o caracter “S” se é poss ível viajar e voltar para o presente, ou “N” caso contrário.

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída(output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

const [a, b, c] = gets().split("").map(Number);

//TODO: Complete os espaços em branco com uma possível solução para o problema

if (a + b == c || a + c == b || b + c == a || a == b || a == c || b == c) {
    print("S");
} else {
    print("N");
}