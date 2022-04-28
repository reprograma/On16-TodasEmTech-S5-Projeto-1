// find uma aluna que tenha nome = 'Agnes'
const turma = require('./dados')

const alunaEncontrada = turma.find((aluna) => {
  return aluna.name === "Lay"
})

console.log(alunaEncontrada)