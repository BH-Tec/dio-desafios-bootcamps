// Desafio
// A Companhia de Táxi Tabajara (CTT) é uma das maiores empresas de transporte do país.
// Possui uma vasta frota de carros e opera em todas as grandes cidades.
// Recentemente a CTT modernizou a sua frota, adquirindo um lote de 500 carros bi-combustíveis (carros que
// podem utilizar como combustível tanto álcool quanto gasolina).
// Além do maior conforto para os passageiros e o menor gasto com manutenção, com os novos carros é possível uma
// redução adicional de custo: como o preço da gasolina está sujeito a variações muito bruscas e pode ser vantagem,
// em certos momentos, utilizar álcool como combustível.
// Entretanto, os carros possuem um melhor desempenho utilizando gasolina, ou seja, em geral, um carro percorre mais
// quilômetros por litro de gasolina do que por litro de álcool.
// Você deve escrever um programa que, dados o preço do litro de álcool, o preço do litro de gasolina e os quilômetros
// por litro que um carro bi-combustível realiza com cada um desses combustíveis, determine se é mais econômico abastecer
// os carros da CTT com álcool ou com gasolina.
// No caso de não haver diferença de custo entre abastecer com álcool ou gasolina a CTT prefere utilizar gasolina.

let lines = gets().split('\n')

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = lines[0].split(' ').map(x => parseFloat(x))

const precoPorKmAlcool = precoAlcool / rendimentoAlcool
const precoPorKmGasolina = precoGasolina  / rendimentoGasolina

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A'

print(maisEconomico)