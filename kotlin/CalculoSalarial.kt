// Desafio
// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.

// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário a ser transferido é calculado da seguinte maneira:

// (valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

// Entrada
// A entrada consiste em vários arquivos de teste, que conterá o valor bruto do salário e adicional
// dos benefícios. Conforme mostrado no exemplo de entrada a seguir.

// Saída
// Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado
// uma linha com um número que será a diferença entre o valor bruto do salário e o percentual de
// imposto mediante a faixa salárial somado com o adicional dos benefícios. Use o exemplo abaixo
// para clarear o que está sendo pedido.

object ReceitaFederal {
  fun calcularImposto(salario: Double): Double {
    val aliquota =
        when {
          (salario >= 0 && salario <= 1100) -> 0.05
          (salario > 1100 && salario <= 2500) -> 0.1
          else -> 0.15
        }
    return aliquota * salario
  }
}

fun main() {
  val valorSalario = readLine()!!.toDouble()
  val valorBeneficios = readLine()!!.toDouble()

  val valorImposto = ReceitaFederal.calcularImposto(valorSalario)
  val saida = valorSalario - valorImposto + valorBeneficios

  println(String.format("%.2f", saida))
}
