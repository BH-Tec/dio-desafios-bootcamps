# DESAFIO
# Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

# Entrada
# A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

# Saída
# Imprima o nome do animal correspondente à entrada fornecida.

A = input()
B = input()
C = input()

if A == 'vertebrado' and B == 'ave' and C == 'carnivoro':
  resposta = 'aguia'

if A == 'vertebrado' and B == 'ave' and C == 'onivoro':
  resposta = 'pomba'

if A == 'vertebrado' and B == 'mamifero' and C == 'onivoro':
  resposta = 'homem'

if A == 'vertebrado' and B == 'mamifero' and C == 'herbivoro':
  resposta = 'vaca'

if A == 'invertebrado' and B == 'inseto' and C == 'hematofago':
  resposta = 'pulga'

if A == 'invertebrado' and B == 'inseto' and C == 'herbivoro':
  resposta = 'lagarta'

if A == 'invertebrado' and B == 'anelideo' and C == 'hematofago':
  resposta = 'sanguessuga'

if A == 'invertebrado' and B == 'anelideo' and C == 'onivoro':
  resposta = 'minhoca'

print(resposta)