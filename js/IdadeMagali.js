// Desafio
// Magali é mãe de três filhos que têm idades diferentes. Ela notou que, neste ano, a soma das idades dos seus três filhos é igual à idade dela. Neste problema, dada a idade de Magali e as idades de dois dos filhos, seu programa deve computar e imprimir a idade do filho mais velho. Por exemplo, se sabemos que Magali tem 52 anos e as idades conhecidas de dois dos filhos são 14 e 18 anos, então a idade do outro filho, que não era conhecida, tem que ser 20 anos, pois a soma das três idades tem que ser 52. Portanto, a idade do filho mais velho é 20. Em mais um exemplo, se Magali tem 47 anos e as idades de dois dos filhos são 21 e 9 anos, então o outro filho tem que ter 17 anos e, portanto, a idade do filho mais velho é 21.

// Entrada
// A primeira linha da entrada contém um inteiro M representando a idade de Magali. A segunda linha da entrada contém um inteiro A representando a idade de um dos filhos. A terceira linha da entrada contém um inteiro B representando a idade de outro filho.

// Saída
// Seu programa deve imprimir uma linha, contendo um número inteiro, representando a idade do filho mais velho de Magali.

// Restrições
// • 40 ≤ M ≤ 110
// • 1 ≤ A < M
// • 1 ≤ B < M
// • A ≠ B

let M = parseInt(gets())
let A = parseInt(gets())
let B = parseInt(gets())

let C = M - (A + B)
let res = A;
if ( res < B && B > C) res = B;   
if ( res < C && C > B) res = C;

print(res)