// Descrição
// Você é um aventureiro em um mundo mágico cheio de perigos e monstros. Durante suas missões, você coleta diversos itens mágicos, cada um com seus próprios atributos e habilidades especiais. Agora, você está desenvolvendo um sistema aprimorado para gerenciar esses itens. Neste novo sistema, você pode criar diferentes tipos de itens mágicos, como armas, armaduras, poções, entre outros. Cada tipo de item terá atributos específicos e contribuirá de maneiras únicas para suas aventuras.

// Tarefa: Crie um objeto que represente um item mágico personalizado. O objeto deve ter atributos como nome, tipo de item, dano e resistência, de acordo com o tipo escolhido. Além disso, crie uma função que calcule o dano causado por um item durante um combate, levando em consideração os atributos específicos do tipo de item.

// Entrada
// Peça ao usuário para digitar o tipo do item mágico que deseja criar.

// Saída
// Imprima o nome, o tipo do item, o dano e a resistência.

// Use a função de cálculo de dano para imprimir o dano causado por esse item em um combate simulado.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Conceitos Aprendidos com o Desafio:
// No desafio "Gerenciamento de Itens Mágicos", abordamos os seguintes conceitos e tópicos de programação:

// Objeto Representando um Item Mágico:

// Criar um objeto com propriedades para nome, tipo de item, dano e resistência. O objeto armazena informações específicas do item mágico.

// Entrada do Usuário:

// Solicitar ao usuário o tipo do item mágico e seus atributos (dano e resistência). A entrada é obtida usando a função gets().

// Saída e Impressão:

// Exibir os detalhes do item mágico, incluindo tipo, dano e resistência. Usar print() para mostrar informações ao usuário.

// Função para Calcular Dano em Combate:

// Criar uma função calcularDanoCombate(dano) para calcular o dano causado pelo item. A função retorna o valor do dano.

// Utilização do Objeto e Função:

// Criar um objeto para o item mágico com os valores inseridos pelo usuário. Exibir os detalhes do item mágico e o dano em combate usando a função calcularDanoCombate.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Solicita ao usuário o tipo do item mágico utilizando gets();
const tipoItem = gets();

// Solicita os atributos específicos do item mágico
const dano = parseInt(gets());
const resistencia = parseInt(gets());

// Imprime os detalhes do item mágico
print("Tipo:", tipoItem);
print("Dano:", dano);
print("Resistencia:", resistencia);

// TODO: Defina uma função chamada calcular Dano Combate que recebe um parâmetro chamado (dano);
// TODO: Dentro da função retone o dano;
function calcularDanoCombate(dano) {
  // TODO: Adicione aqui a lógica de cálculo do dano de combate
  return dano;
}

// Imprime o dano de combate:
print("Dano em combate:", calcularDanoCombate(dano));
