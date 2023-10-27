// Descrição
// Durante uma reunião de acionistas, alguns pontos importantes são discutidos e com isso surge a necessidade do envolvimento da equipe de desenvolvedores. Com isso, você foi designado para criar uma interface que permitirá aos acionistas de uma empresa acessarem informações relevantes sobre as análises da organização bancária. Sua tarefa é implementar uma classe que representa essa interface e que fornece um método para consultar as análises de desempenho e outros tipos dentro de um determinado período.

// Requisitos:

// A classe deve ter um método chamado obterAnalisesDesempenho que recebe como parâmetros uma data inicial e uma data final.

// Entrada
// As datas inicial e final, no formato "dd/mm/aaaa", representando o intervalo de tempo desejado para consulta.

// Saída
// Uma lista contendo as análises de desempenho financeiro realizadas dentro do período especificado.

// Entrada	Saída
// 01/04/2023
// 20/05/2023	Analise de Politicas e Regulamentacoes
// Analise de Ativos
// 05/03/2023
// 05/04/2023	Analises Comporativas
// Analise de Politicas e Regulamentacoes
// 05/01/2023
// 03/03/2023	Analise de Riscos e Exposicoes

import 'dart:io';

void main() {
  final scanner = Scanner();
  final dataInicial = scanner.nextLine();
  final dataFinal = scanner.nextLine();

  final sistemaAcionistas = SistemaAcionistas();
  final analises = sistemaAcionistas.obterAnalisesDesempenho(dataInicial, dataFinal);

  for (final analise in analises) {
    print(analise);
  }
}

class Scanner {
  final _input = stdin;

  String nextLine() {
    return _input.readLineSync()!;
  }
}

class SistemaAcionistas {
  List<String> obterAnalisesDesempenho(String dataInicialStr, String dataFinalStr) {
    final dataInicial = _parseDate(dataInicialStr);
    final dataFinal = _parseDate(dataFinalStr);

    final analises = <Analise>[
      Analise(_parseDate('01/01/2023'), 'Analise de Desempenho Financeiro'),
      Analise(_parseDate('15/02/2023'), 'Analise de Riscos e Exposicoes'),
      Analise(_parseDate('31/03/2023'), 'Analises Corporativas'),
      Analise(_parseDate('01/04/2023'), 'Analise de Politicas e Regulamentacoes'),
      Analise(_parseDate('15/05/2023'), 'Analise de Ativos'),
      Analise(_parseDate('30/06/2023'), 'Analise de Inovacao e Tecnologia'),
    ];

    final analisesFiltradas = <String>[];

    for (final analise in analises) {
      if (analise.data.isAtSameMomentAs(dataInicial) ||
          (analise.data.isAfter(dataInicial) && analise.data.isBefore(dataFinal)) ||
          analise.data.isAtSameMomentAs(dataFinal)) {
        analisesFiltradas.add(analise.descricao);
      }
    }

    return analisesFiltradas;
  }

  DateTime _parseDate(String dateStr) {
    final parts = dateStr.split('/');
    final day = int.parse(parts[0]);
    final month = int.parse(parts[1]);
    final year = int.parse(parts[2]);
    return DateTime(year, month, day);
  }
}




class Analise {
  final DateTime data;
  final String descricao;

  Analise(this.data, this.descricao);
}