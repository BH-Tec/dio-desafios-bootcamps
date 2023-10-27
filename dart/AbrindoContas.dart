// Desafio
// Você é um desenvolvedor em início de carreira e foi contratado por um banco para criar um sistema básico de abertura de contas. Sua tarefa é implementar uma classe chamada "ContaBancaria" que represente uma conta bancária com as seguintes informações: número da conta, nome do titular e saldo.

// Entrada
// O programa deve solicitar ao usuário as informações necessárias para abrir uma conta bancária. A entrada deve ser feita via console (linha de comando) e deve incluir o número da conta (um valor inteiro), o nome do titular (uma sequência de caracteres) e o saldo inicial da conta (um valor decimal).

// Saída
// Após receber as informações da conta, o programa deve criar um objeto do tipo "ContaBancaria" e exibir na tela as informações dessa conta, incluindo o número da conta, o nome do titular e o saldo atual. A saída deve ser formatada de forma clara e legível para o usuário.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// 010101
// Caio Carlos
// 98.0

// Informacoes:
// Conta: 101010
// Titular: Caio Carlos
// Saldo: R$ 98.0

// 212223
// Carla Paiva
// 500.0

// Informacoes:
// Conta: 212223
// Titular: Carla Paiva
// Saldo: R$ 500.0
// 123456
// Joao Silva
// 1000.0	Informacoes:
// Conta: 123456
// Titular: Joao Silva
// Saldo: R$ 1000.0

import 'dart:io';

class ContaBancaria {
  int numeroConta;
  String nomeTitular;
  double saldo;

  ContaBancaria(this.numeroConta, this.nomeTitular, this.saldo);

  int getNumeroConta() {
    return numeroConta;
  }

  String getNomeTitular() {
    return nomeTitular;
  }

  double getSaldo() {
    return saldo;
  }
}

void main() {
  int numeroConta = int.parse(stdin.readLineSync()!);
  String nomeTitular = stdin.readLineSync()!;
  double saldo = double.parse(stdin.readLineSync()!);

  ContaBancaria conta = ContaBancaria(numeroConta, nomeTitular, saldo);

  print("Informacoes:");
  print("Conta: ${conta.getNumeroConta()}");
  print("Titular: ${conta.getNomeTitular()}");
  print("Saldo: R\$ ${conta.getSaldo().toStringAsFixed(1)}");
}
