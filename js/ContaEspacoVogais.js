// Desafio
// Jorginho é professor do primário de uma determinada escola. Ele tem 100000 alunos e precisa criar um programa que verifica quantos espaços em branco e quantas vogais existem em uma determinada string de entrada que os alunos entregaram na avaliação final. Ajude-o a realizar essa tarefa antes que o tempo para entrega-la no fim do semestre acabe!

// Entrada
// A entrada será uma frase no formato de string. 

// Saída
// A saída deverá retornar quantos espaços em branco e quantas vogais existem na determinada string

// TODO: faça um programa que contabilize quantos espaços em branco e quantas vogais existem
//na string de entrada;

let str = gets();
let strSplit = str.split('');

let vogais = 0;
let espacos = 0;

for (let i = 0; i < strSplit.length; i++) {
  if (strSplit[i].toLowerCase() === 'a' || strSplit[i].toLowerCase() === 'e' || strSplit[i].toLowerCase() === 'i' || strSplit[i].toLowerCase() === 'o' || strSplit[i].toLowerCase() === 'u') {
    vogais++;
  } else if (strSplit[i] === ' ') {
    espacos++;
  }
}

print(`Espacos em branco: ${espacos} Vogais: ${vogais}`);
