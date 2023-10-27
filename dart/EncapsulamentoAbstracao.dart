// /// The description is explaining the task at hand, which is to develop a secure safe system. The
/// goal is to create two types of safes: a Digital Safe, which is opened by a password, and a
/// Physical Safe, which is opened by a key.
Descrição
// Você foi contratado para desenvolver um sistema de cofres seguros. O objetivo é criar dois tipos de cofres: um Cofre Digital, que é aberto por senha, e um Cofre Físico, que é aberto por chave.

// Entrada
// O programa irá solicitar ao usuário que digite o tipo de cofre a ser criado: "digital" ou "físico". Se for escolhido o tipo "digital", o programa irá solicitar a senha e a confirmação de senha do cofre digital (ambas com apenas números). Caso seja escolhido o tipo "físico", não é necessário nenhuma outra entrada.

// Saída
// O programa irá exibir as informações do cofre criado. Para o Cofre Digital, será exibido o tipo e o método de abertura (senha). Para o Cofre Físico, será exibido apenas o tipo e o método de abertura (chave).

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// digital
// 12345
// 1234

// Tipo: Cofre Digital
// Metodo de abertura: Senha
// Senha incorreta!

// fisico

// Tipo: Cofre Fisico
// Metodo de abertura: Chave

// digital
// 2525
// 2525

// Tipo: Cofre Digital
// Metodo de abertura: Senha
// Cofre aberto!


import 'dart:io';

abstract class Cofre {
  final String tipo;
  final String metodoAbertura;

  Cofre(this.tipo, this.metodoAbertura);

  void imprimirInformacoes() {
    print('Tipo: $tipo');
    print('Metodo de abertura: $metodoAbertura');
  }
}

class CofreDigital extends Cofre {
  final int senha;

  CofreDigital(this.senha)
      : super('Cofre Digital', 'Senha');

  bool validarSenha(int confirmacaoSenha) {
    return confirmacaoSenha == senha;
  }
}

class CofreFisico extends Cofre {
  CofreFisico()
      : super('Cofre Fisico', 'Chave');
}

void main() {
  final tipoCofre = stdin.readLineSync();

  if (tipoCofre?.toLowerCase() == 'digital') {
    final senha = int.tryParse(stdin.readLineSync() ?? '');
    final confirmacaoSenha = int.tryParse(stdin.readLineSync() ?? '');

    if (senha != null && confirmacaoSenha != null) {
      final cofre = CofreDigital(senha);
      cofre.imprimirInformacoes();

      if (cofre.validarSenha(confirmacaoSenha)) {
        print('Cofre aberto!');
      } else {
        print('Senha incorreta!');
      }
    }
  } else if (tipoCofre?.toLowerCase() == 'fisico') {
    final cofre = CofreFisico();
    cofre.imprimirInformacoes();
  }
}
