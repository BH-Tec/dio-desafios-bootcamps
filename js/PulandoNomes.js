// Desafio
// Faça um programa com as características abaixo:

// Leia 10 nomes, sem espaço em branco;
// Imprima o terceiro nome da lista;
// Imprima o sétimo nome da lista;
// Imprima o nono nome da lista.
// Entrada
// A entrada consiste vários arquivos de teste, cada um com dez linhas e em cada linha tem um nome de no até 30 caracteres e sem espaço em branco. Conforme mostrado no exemplo de entrada a seguir.

// Saída
// Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, gere três linhas conforme os procedimentos 2, 3 e 4.

let nomes = new Array(10)

for(let i=0 ; i<10; i++)
  nomes[i] = gets();

print(nomes[2])
print(nomes[6])
print(nomes[8])