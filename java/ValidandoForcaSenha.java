// Desafio
// Você está trabalhando para uma empresa que utiliza extensivamente os serviços
// da AWS, e após algumas análises a equipe de segurança identificou que algumas
// senhas dos usuários no IAM são fracas e podem representar um risco à
// segurança dos dados da empresa. Para resolver esse problema, foi solicitado
// que você desenvolva um programa capaz de analisar as senhas dos usuários e
// fornecer uma validação de força com base em critérios predefinidos.

// Requisitos de segurança para a senha:

// A senha deve ter no mínimo 8 caracteres.
// A senha deve conter pelo menos uma letra maiúscula (A-Z).
// A senha deve conter pelo menos uma letra minúscula (a-z).
// A senha deve conter pelo menos um número (0-9).
// A senha deve conter pelo menos um caractere especial, como !, @, #, $, %,
// etc.
// Saiba mais sobre o Regex em: Java Regular Expressions

// Entrada
// A entrada será uma única string representando a senha que precisa ser
// validada.

// Saída
// Seu programa deve retornar uma mensagem indicando se a senha fornecida pelo
// usuário atende aos requisitos de segurança ou não, juntamente com um feedback
// explicativo sobre os critérios considerados.

import java.util.Scanner;
import java.util.regex.Pattern;

public class ValidandoForcaSenha {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    // System.out.println("Digite a senha para verificar a força:");
    String senha = scanner.nextLine();
    // scanner.close();

    String resultado = verificarForcaSenha(senha);
    System.out.println(resultado);
  }

  public static String verificarForcaSenha(String senha) {
    int comprimentoMinimo = 8;

    // Critérios de validação usando expressões regulares
    boolean temLetraMaiuscula = Pattern.compile("[A-Z]").matcher(senha).find();
    boolean temLetraMinuscula = Pattern.compile("[a-z]").matcher(senha).find();
    boolean temNumero = Pattern.compile("\\d").matcher(senha).find();
    boolean temCaractereEspecial = Pattern.compile("\\W").matcher(senha).find();
    boolean temSequenciaComum = senha.matches(".*(?i)123456.*|.*(?i)abcdef.*");
    boolean temPalavraComum = senha.equalsIgnoreCase("password") || senha.equalsIgnoreCase("123456")
        || senha.equalsIgnoreCase("qwerty");

    // Verifique o comprimento mínimo e critérios de validação
    if (senha.length() < comprimentoMinimo) {
      return "Sua senha e muito curta. Recomenda-se no minimo 8 caracteres.";
    } else if (!temLetraMaiuscula) {
      return "Sua senha e muito curta. Recomenda-se no minimo 8 caracteres.";
    } else if (!temLetraMinuscula) {
      return "Sua senha e muito curta. Recomenda-se no minimo 8 caracteres.";
    } else if (!temNumero) {
      return "Sua senha e muito curta. Recomenda-se no minimo 8 caracteres..";
    } else if (!temCaractereEspecial) {
      return "Sua senha nao atende aos requisitos de seguranca.";
    } else if (temSequenciaComum) {
      return "Sua senha nao atende aos requisitos de seguranca.";
    } else if (temPalavraComum) {
      return "Sua senha nao atende aos requisitos de seguranca.";
    } else {
      return "Sua senha atende aos requisitos de seguranca. Parabens!";
    }
  }

}