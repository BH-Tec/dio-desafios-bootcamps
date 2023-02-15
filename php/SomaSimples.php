<!-- Desafio
Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma entre elas e chame essa variável de SOMA.
A seguir escreva o valor desta variável.

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a variável SOMA com todas as letras maiúsculas, inserindo um espaço em branco antes e depois do símbolo de igualdade, seguido pelo valor correspondente à soma de A e B.
-->

<?php
  // Leia o Desafio e siga o código base abaixo para resolvê-lo. Algumas dicas:
  // 1. Use a função "fgets(STDIN)" para ler uma linha de Entrada;
  // 2. Use a função "echo" formatar e imprimir sua(s) Saída(s).

  $a = fgets(STDIN);
  $b = fgets(STDIN);

  //TODO: Crie uma nova variável "$soma" para receber o valor de "$a + $b".
  $soma = $a + $b;
  //TODO: Use a função "echo" para imprimir o resultado da soma no padrão de saída.
  echo "SOMA = " . $soma . "\n";
?>