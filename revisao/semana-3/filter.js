// filtrar as alunas com idade maior ou igual a 30
const turma = require('./dados')

const turmaFiltrada = turma.filter((aluna) => {
  return aluna.age >= 30
})

console.log(turmaFiltrada)