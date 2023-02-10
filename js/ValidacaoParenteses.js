// Desafio
// Dada uma string com apenas os seguintes caracteres '(', ')', '{', '}', '[', ']' determine se uma determinada string é válida. 

// Entrada
// Uma string é considerada válida se:

// Caracteres de abertura devem ser fechadas pelo mesmo tipo. Abertura devem ser fechados com uma chave correspondente.
// Uma string vazia é considerada válida. 

// Saída
// A saída corresponde a um valor Booleano.

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var isValid = function (s) {
  const stack = [];
  const open = ['(', '{', '['];
  const close = [')', '}', ']'];

  for (let i = 0; i < s.length; i++) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else {
      const index = close.indexOf(s[i]);
      if (stack.length === 0 || stack[stack.length - 1] !== open[index]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

// Exemplo de uso
let s = gets();
print(isValid(s));