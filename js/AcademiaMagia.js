// Desafio
// Em um mundo de RPG, personagens utilizam diferentes tipos de magia em batalhas para vencer seus inimigos. Cada magia possui uma função específica: ataque, cura ou defesa.

// Desenvolva um programa que permita ao usuário escolher o tipo de magia que deseja utilizar e quantas vezes deseja utilizá-la. Em seguida, o programa deverá executar a magia escolhida a quantidade de vezes especificada pelo usuário.

// Entrada
// O programa deve solicitar ao usuário que escolha um tipo de magia entre as opções "ataque", "cura" ou "defesa", utilizando a função io.read(). Em seguida, o programa deve solicitar a quantidade de vezes que a magia escolhida será utilizada, também utilizando o io.read().

// Saída
// Após receber o tipo de magia e a quantidade de vezes que deseja usá-la, o programa deve exibir na tela a mensagem correspondente a cada uso da magia. As mensagens de saída devem seguir o seguinte formato:

// "Usou magia de ataque!" (caso o tipo de magia escolhido seja "ataque")
// "Usou magia de cura!" (caso o tipo de magia escolhido seja "cura")
// "Usou magia de defesa!" (caso o tipo de magia escolhido seja "defesa")
// "Tipo de magia inválido!" (caso o tipo de magia escolhido seja diferente de "ataque", "cura" ou "defesa")
// O programa deve exibir uma mensagem para cada uso da magia, repetindo essa mensagem a quantidade de vezes que foi escolhida pelo usuário no início do programa.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Solicita ao usuário o tipo de magia
const tipoMagia = gets();

// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade = parseInt(gets());

// Obtem a mensagem correspondente ao tipo de magia
const mensagem = obterMensagem(tipoMagia);

// Função para obter a mensagem correspondente ao tipo de magia
function obterMensagem(tipo) {
  // Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };
  // Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
  return mensagens[tipo] || mensagens.invalido;
}

// Verifica se o tipo de magia é válido
if (mensagem === "Tipo de magia inválido!") {
  print(mensagem);
} else {
  // É impressa a mensagem a quantidade de vezes especificada:
  for (let i = 0; i < quantidade; i++) {
    print(mensagem);
  }
}