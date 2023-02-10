// Desafio
// Os algarismos romanos são representados por sete símbolos diferentes: I, V, X, L, C, D e M.
// Cada um deles possui um valor:
// I : 1
// V : 5
// X : 10
// L : 50
// C : 100
// D : 500
// M : 1000 
// Eles são geralmente escritos do maior para o menor. Porém, para escrevermos “4” não usamos “IIII”, mas sim “IV” porque 5 – 1 = 4.

s = gets()

const map = {
    "I": 1, 
    "V": 5, 
    "X": 10, 
    "L": 50, 
    "C": 100, 
    "D": 500, 
    "M": 1000
}

let valor = 0

s = s.toUpperCase()

for (let i = 0; i < s.length; i++) {
    if ((i+1) < s.length) {
        if (map[s[i]] >= map[s[i+1]]) {
            valor += map[s[i]]
        } else {
            valor -= map[s[i]]
        }
    } else {
        valor += map[s[i]]
    }
}

print(valor)