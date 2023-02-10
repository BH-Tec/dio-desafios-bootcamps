// Desafio 3
// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário a ser transferido é calculado da seguinte maneira:
// (valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios
// Para calcular o percentual de imposto segue as aliquotas:
//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarAliquota(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500.0) {
    return 10;
  } else {
    return 15;
  }
}
const aliquotaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir.toFixed(2));
