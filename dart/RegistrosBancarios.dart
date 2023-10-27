// Descrição
// Neste desafio, você criará uma solução para um sistema bancário utilizando conceitos de orientação a objetos. A implementação solicitada pela equipe de desenvolvimento da empresa bancária, gostaria de fosse realizado uma melhoria no sistema de registros, onde é recebido os dados brutos dos registros bancários. O objetivo é obter as informações de uma forma mais amigavel para o cliente e não oferecer informações brutas.

// Considere que cada transação é representada por apenas uma string contendo as seguintes informações:

// data,hora,descricao,valor
// Dessa forma, crie uma classe representando as Transacoes e nela será recebido os atributos necessários para guardar as informações, ao fim, retorne o registro contendo a data, hora e valor da transação.

// Entrada
// A entrada será a representação de um registro (string) no formato e sequencia: "data,hora,descricao,valor".

// Saída
// A saída deve ser o valor do registro (string) recebido na entrada informando a transação efetuada, contendo, descrição, data, hora e valor da transação, como no exemplo da tabela a baixo.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// 01/02/2023,09:00:00,Deposito,100.00

// Deposito
// 01/02/2023
// 09:00:00
// 100.00

// 11/05/2023,11:15:00,Transferencia,25.00

// Transferencia
// 11/05/2023
// 11:15:00
// 25.00

// 21/09/2023,10:30:00,Saque,30.00
 

// Saque
// 21/09/2023
// 10:30:00
// 30.00

import 'dart:io';

void main() {
  final scanner = stdin;

  final entrada = scanner.readLineSync()!;
  final partes = entrada.split(',');

  if (partes.length == 4) {
    final data = partes[0];
    final hora = partes[1];
    final descricao = partes[2];
    final valor = double.tryParse(partes[3]) ?? 0.0;

    final transacao = Transacao(data, hora, descricao, valor);
    transacao.imprimir();
  }
}

class Transacao {
  final String data;
  final String hora;
  final String descricao;
  final double valor;

  Transacao(this.data, this.hora, this.descricao, this.valor);

  void imprimir() {
    print(descricao);
    print(data);
    print(hora);
    print(valor.toStringAsFixed(2));
  }
}
