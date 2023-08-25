// Descrição
// Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

// Tarefa: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

// Entrada
// A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

// Saída
// A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// Bulba	Bulbasaur
// Ivy	Ivysaur
// Venu	Venusaur
// Conceitos Aprendidos com o Desafio:
// Ao enfrentar o desafio "Combinando Nomes de Pokémons", você terá a oportunidade de dominar os seguintes conceitos relacionados a programação:

// Funções: Aprender como criar e usar funções é um dos conceitos básicos da programação. No código fornecido, a função combinandoNomesPokemons é definida para criar o nome completo de um Pokémon combinando a entrada fornecida com o sufixo "saur".

// Concatenação de Strings: Você usou a operação de concatenação de strings para unir a parte de entrada (prefixo) com o sufixo "saur", criando assim o nome completo do Pokémon.

// Entrada e Saída de Dados: O código utiliza gets() para solicitar ao usuário a entrada da primeira parte do nome do Pokémon. Além de utilizar o print() para imprimir a saída (nome gerado) no console.

// Manipulação de Strings: O desafio envolve manipulação de strings, pois você está combinando diferentes partes de strings para formar um novo nome.

// Variáveis: Você usou variáveis para armazenar os valores intermediários e finais, como palavraPokemon para armazenar o nome completo gerado.

// Lógica de Programação: Embora seja um desafio relativamente simples, ele requer lógica de programação para compreender como criar um nome de Pokémon completo a partir da entrada fornecida.

// Interação com o Usuário: O uso da função print() mostra como você pode interagir com o usuário para obter entrada interativa.

// Linguagem de Programação JavaScript: O desafio utiliza a linguagem de programação JavaScript, o que proporcionou uma oportunidade para aplicar os conceitos aprendidos em lógica dentro do contexto dessa linguagem.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// TODO: Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// TODO: Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";
// TODO: Após a váriavel, retorne a palavra pokemon;
// Defina a função "combinandoNomesPokemons" que recebe um parâmetro chamado "palavra":
function combinandoNomesPokemons(palavra) {
  // Crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur":
  var palavraPokemon = palavra + "saur";

  // Retorne a palavra pokemon:
  return palavraPokemon;
}

// Entrada da palavra usando o gets():
var nomeEntrada = gets();

// Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
var palavraGerada = combinandoNomesPokemons(nomeEntrada);

// Exibindo a palavra gerada:
print(palavraGerada);
