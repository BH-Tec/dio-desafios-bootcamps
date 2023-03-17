// Desafio
// Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.

// Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.

// Entrada
// A entrada do programa será feita pelo usuário e terá as seguintes informações (propriedades):

// nome: o nome do cliente, representado por uma string;
// endereco: endereço do cliente, representado por uma string;
// id: identificador do pedido do cliente, representado por um valor numérico;
// telefone: telefone do cliente, representado por uma string;
// Importante: a entrada deverá ocorrer de acordo com a ordem de informações fornecidas acima.

// Saída
// Deverá retornar uma mensagem (string) que mostre as informações do cliente e do pedido na tela, veja exemplo abaixo:

// Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
// ID: ${pedido.id}
// Tel: ${pedido.cliente.telefone}

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
  cliente: {
    nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
    endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
  },
  id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
}

//TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
const telefoneCliente = gets()
//TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".
pedido.cliente.telefone = telefoneCliente
//TODO: Imprima a saída formatada de acordo com este desafio.
print(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`)
print(`ID: ${pedido.id}`)
print(`Tel: ${pedido.cliente.telefone}`)