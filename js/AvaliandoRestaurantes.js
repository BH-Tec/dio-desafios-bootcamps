// Desafio
// Você é um desenvolvedor de um aplicativo de delivery de comida muito popular na sua cidade. O aplicativo permite que os usuários encontrem e peçam comida de seus restaurantes favoritos diretamente do conforto de suas casas.

// Um dos seus colegas de trabalho, que é responsável pela integração de novos restaurantes ao aplicativo, pediu sua ajuda para criar um código que exiba o restaurante com a melhor avaliação em uma página web. Para isso, ele forneceu um array de objetos JSON contendo informações sobre dois restaurantes.

// Você, como um excelente desenvolvedor, decide ajudar seu colega de trabalho com este desafio e começa a escrever o código necessário para exibir as informações na tela. Seu desafio é criar um código em JavaScript que percorra uma array de dois objetos JSON contendo informações sobre os restaurantes, exibindo o nome e a avaliação do restaurante com a melhor avaliação.

// Entrada
// A entrada do seu código será os valores (nome e avaliação) dos seus objetos JSON, contendo informações necessárias sobre cada restaurante. Cada objeto terá as seguintes propriedades:

// nome: o nome do restaurante, representado por uma string;
// avaliacao: a avaliação média do restaurante, representado por um número de 0 a 5.
// Saída
// A saída do seu código será o nome e a avaliação do restaurante melhor avaliado. Lembre-se de formatar a avaliação com 1 casa decimal após a virgula, conform o exemplo a seguir:
// Restaurante: ${restaurante.nome}, Avaliação: ${restaurante.avaliacao}

// Caso eles tenham a mesma avaliação, imprima o primeiro a ser lido na Entrada.

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
const restaurantes = [
  {
    nome: gets(), 
    avaliacao: parseFloat(gets())
  },
  {
    nome: gets(), 
    avaliacao: parseFloat(gets())
  }
]

//TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
//Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
//Referência: https://stackoverflow.com/a/34087850/3072570
const melhorRestaurante = restaurantes.reduce((restaurante1, restaurante2) => {
  if (restaurante1.avaliacao > restaurante2.avaliacao) {
  return restaurante1;
  } else {
  return restaurante2;
  }
  })
//TODO: Imprima a saída de acordo com o enunciado deste desafio.
print(`Restaurante: ${melhorRestaurante.nome}, Avaliação: ${melhorRestaurante.avaliacao.toFixed(1)}`)