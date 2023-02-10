// Desafio
// O gerente de uma loja resolveu aplicar descontos em todos os seus produtos! A tarefa é calcular a Porcentagem de Desconto aplicada a esses produtos. 

// Entrada
// A entrada deverá ser feita por dois valores M e D, onde a primeira linha deverá receber o valor marcado do produto, e na segunda linha o valor do produto com o desconto já aplicado.

// Saída
// A saída deverá retornar o percentual de desconto que foi aplicado no produto.

let M, S; 

M = parseInt(gets()); 
S = parseInt(gets()); 

let desconto = ((M - S) / M) * 100;

//TODO: Retorne o percentual de desconto que foi aplicado no produto
print("O desconto foi de " + desconto.toFixed(0) + "%\n");