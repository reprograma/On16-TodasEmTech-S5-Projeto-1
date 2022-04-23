const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')

const resposta = read.question(`
====================== Menu ========================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um número[1-5]: 
`)

//Quando a pessoa escolher a opção 1, eu quero que o js chame
// a funcão que vai estar no meu arquivo controllers/buscarLivros
switch (resposta) {
  case '1':
    //chamar a funcao buscarLivros
    buscarLivros()
    break
  case '2':
    //chamar a funcao listarLivrosOrdenados
    break
  default:
    console.log('fim do algoritmo')
    break
}
