// Desafio
// Geronimo acredita que perde muito tempo lembrando qual número do mês representa cada um deles.
// Ele precisa de um programa que mude os meses do ano do calendário do celular dele para facilitar e agilizar a leitura.
// Ajude-o e faça um programa que, com uma determinada entrada de uma data, retorne essa data com o mês escrito por extenso.

fun main() {
  val entrada: String? = readLine()
  
  // Utiliza o conceito de "destructuring" para atribuir cada parte da data (dia/mes/ano).
  // Referência: https://kotlinlang.org/docs/destructuring-declarations.html
  val (dia, mes, ano) = entrada!!.split("/")
  
  val mesPorExtenso = when (mes.toInt()) {
      1 -> "Janeiro"
      2 -> "Fevereiro"
      3 -> "Marco"
      4 -> "Abril"
      5 -> "Maio"
      6 -> "Junho"
      7 -> "Julho"
      8 -> "Agosto"
      9 -> "Setembro"
      10 -> "Outubro"
      11 -> "Novembro"
      12 -> "Dezembro"
      else -> "Mês Inválido!"
  }
  
  println("$dia de $mesPorExtenso de $ano")
}