const { findSourceMap } = require("module")

const turma = [
  {
    name:'Gaia',
    age: 23,
  },
  {
    name:'Jane',
    age: 34,
  },
  {
    name:'Lay',
    age: 34,
  },
  {
    name:'Agnes',
    age: 28,
  },
  {
    name:'Andreza',
    age: 33,
  },
  {
    name:'Rosiene',
    age: 34,
  },
  {
    name:'Aline',
    age: 34,
  }
]

//Filter: Filtra todas as alunas que tem 34 anos 
const turmaFiltrada = turma.filter((aluna) => aluna.age === 34)
// console.table(turmaFiltrada)

//Reduce: Realizar operacoes matematicas 
//qual a media simples de idades das alunas da lista turma

const somaIdades = turma.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.age
}, 1)

const media = (somaIdades / turma.length).toFixed(2)
console.log(media)


//find
//map
//sort