// Desafio
// Dado um array inteiro de comprimento fixo Arr, duplique cada ocorrência de zero, deslocando os elementos restantes para direita.
// Fique atento, pois os elementos que estiverem além do comprimento da matriz original, não devem ser gravados.
// Caso não houver nenhum zero, retorne a matriz original.

let N = parseInt(gets())

let arr = new Array(N)

for (let i = 0; i < N; i++) { 

    arr[i] = parseInt(gets())

    if(arr[i] === 0) {
      if((i+1) < N) {
        arr[i+1] = 0
        i++
      }
    }
}

print(arr)