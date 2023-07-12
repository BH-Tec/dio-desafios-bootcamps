// Desafio
// Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:

// Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
// DDD nao cadastrado

// Entrada
// A entrada consiste de um único valor inteiro.

// Saída
// Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets()" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print()": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// - "split()": divide uma String em um Array de Strings;

// Abaixo segue um exemplo de código que você pode ou não utilizar:

const DDD = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o problema

switch (DDD) {
    case 61: print("Brasilia"); break;
    case 71: print("Salvador"); break;
    case 11: print("Sao Paulo"); break;
    case 21: print("Rio de Janeiro"); break;
    case 32: print("Juiz de Fora"); break;
    case 19: print("Campinas"); break;
    case 27: print("Vitoria"); break;
    case 31: print("Belo Horizonte"); break;
    default: print("DDD nao cadastrado");
}