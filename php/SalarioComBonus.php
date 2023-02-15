<!-- Desafio
Com o objetivo de ver quanto os seus funcionários vendem, um empresário te contratou para desenvolver um programa que leia: o nome do vendedor, seu salário fixo, e o total de vendas que ele efetuou no mês, sendo este valor em dinheiro.

Um vendedor da loja ganha 15% de comissão sobre o valor das suas vendas, sendo assim, descubra quanto esse funcionário vai receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.-->

<?php
  // Leia o Desafio e siga o código base abaixo para resolvê-lo. Algumas dicas:
  // 1. Use a função "fgets(STDIN)" para ler uma linha de Entrada;
  // 2. Use a função "echo" formatar e imprimir sua(s) Saída(s).

  $nome = fgets(STDIN);
  $salario = fgets(STDIN);
  $totalVendas = fgets(STDIN);

  //TODO: Calcule e imprima o TOTAL, tendo em vista o padrão de Saída.
  $totalReceber = $salario + ($totalVendas * 0.15);

  echo "TOTAL = R$ " . number_format($totalReceber, 2, '.', '') . "\n";
?>