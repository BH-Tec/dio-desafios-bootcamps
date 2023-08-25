// Descrição
// No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e Mewtwo. Cada treinador escolhe apenas um dos três. Seu desafio é criar um programa que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas com o Pokémon escolhido.

// Entrada
// Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 5 para Mewtwo.

// Saída
// A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.


//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt() é importante para a conversão dos valores de entrada (string) para um valor numérico (int).
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido;

// Implemente as condições necessárias para a solução do desafio:
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 3) {
    pokemonEscolhido = "Squirtle";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
}

// Imprime o Pokémon escolhido:
if (pokemonEscolhido) {
    print("Voce escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.");
}
