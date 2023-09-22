// Desafio
// Você deve desenvolver um programa que simule um RPG com um loop de repetição e concatenação. O programa deve solicitar o nome do personagem e, em seguida, pedir que o usuário escolha entre "Atacar" ou "Fugir". Caso o usuário escolha uma ação inválida, o programa deve exibir uma mensagem de erro e permitir que o usuário tente novamente

// Entrada:
// O programa deve solicitar ao usuário que insira o nome do personagem e a ação que ele deve realizar (Atacar ou Fugir). O nome e a ação deve ser inserido como uma String.

// Saída:
// Após receber o nome do personagem e a ação escolhida, o programa deve exibir uma mensagem informando qual ação foi escolhida pelo personagem, concatenando o nome do personagem com a ação escolhida. Em caso de ação inválida, o programa deve exibir a mensagem de erro: "Tente novamente".

// Exemplo:
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// Jubileu
// Fugir

// Jubileu escolheu Fugir!

// Elsa Yajin
// Atacar

// Elsa Yajin escolheu Atacar!

// Ragnar
// Correr

// Tente novamente

// Solicita ao usuário que insira o nome do personagem:
const nomePersonagem = gets();

// Solicita ao usuário que escolha entre "Atacar" ou "Fugir":
let acaoEscolhida = gets();

// TODO: Implemente uma solução utilizando lógica de programação;
//TODO: Verifique a ação escolhida e exibir a mensagem correspondente:
if (acaoEscolhida === "Atacar") {
  console.log(`${nomePersonagem} escolheu Atacar!`);
} else if (acaoEscolhida === "Fugir") {
  console.log(`${nomePersonagem} escolheu Fugir!`);
} else {
  console.log("Tente novamente");
}
