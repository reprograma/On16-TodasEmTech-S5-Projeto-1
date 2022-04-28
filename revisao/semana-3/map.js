// mapeie todas as alunas e me retorne um novo array
// só com os nomes dessas alunas
const turma = require('./dados')

const listaNomes = turma.map((aluna) => {
  return aluna.name
})

//me retorna a lista ordenada
console.log(listaNomes.sort())