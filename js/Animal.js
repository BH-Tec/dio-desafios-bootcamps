// Desafio

// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

// Entrada
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída(output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let x = gets();
let y = gets();
let z = gets();

if ((x == "vertebrado") && (y == "ave") && (z == "carnivoro")) {
    print("aguia\n");
}

if ((x == "vertebrado") && (y == "ave") && (z == "onivoro")) {
    print("pomba");
}

if ((x == "vertebrado") && (y == "mamifero") && (z == "onivoro")) {
    print("homem");
}

if ((x == "vertebrado") && (y == "mamifero") && (z == "herbivoro")) {
    print("vaca");
}

if ((x == "invertebrado") && (y == "inseto") && (z == "hematofago")) {
    print("pulga");
}

if ((x == "invertebrado") && (y == "inseto") && (z == "herbivoro")) {
    print("lagarta");
}

if ((x == "invertebrado") && (y == "anelideo") && (z == "hematofago")) {
    print("sanguessuga");
}

if ((x == "invertebrado") && (y == "anelideo") && (z == "onivoro")) {
    print("minhoca");
}