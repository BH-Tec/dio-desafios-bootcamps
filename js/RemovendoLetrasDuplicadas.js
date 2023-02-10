// Desafio
// Dado uma string S, retorne os valores removendo todas as letras que aparecem de forma duplicada, restando apenas letras que aparecem uma vez.

const s = gets()

let result = ''

for (let index = 0; index < s.length; index++) {
    const str = s[index]
    if (result.includes(str)) continue
    while (str === result) {
            result = result.slice(0, -1)
        } 
    result += str 
    } 

print(result)