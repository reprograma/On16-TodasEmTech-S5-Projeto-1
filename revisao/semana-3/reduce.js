// Calcule a média das idades das alunas 
// (envolve operacao matematica eu uso reduce)
const turma = require('./dados')

const somaIdades = turma.reduce((acumulador, alunaAtual) => {
  return acumulador + alunaAtual.age
}, 0)

const media = (somaIdades/turma.length).toFixed(2)
console.log(media)