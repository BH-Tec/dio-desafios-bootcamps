// Entrada 
// A entrada consiste em um valor númerico, inteiro ou decimal.

// Saída
// A saída verá mostrar se o valor é inteiro ou decimal.

let valor = gets();
valor = parseFloat(valor.replace(",", "."));
if (Number.isInteger(valor)) {
  print("Inteiro\n");
} else {
  print("Decimal\n");
}