// ordenar as alunas pela idade crescente
const turma = require('./dados')

const listaOrdenada = turma.sort((a, b) => {
  return a.age - b.age
})

console.log(listaOrdenada)