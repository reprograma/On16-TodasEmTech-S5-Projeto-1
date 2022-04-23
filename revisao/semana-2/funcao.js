// retornar a multiplicacao de 2 numeros
// declaração com a palavra reservada function
function myfunction(num1, num2) {
  return num1 * num2
}

const result = myfunction(4, 5) //20
console.log(result)

//função anônima
const multiplica = function(num1, num2) {
  return num1 * num2
}

console.log(multiplica(4, 5)) //20

//arrow function
const multiplicaDoiInteiros = (num1, num2) => {
  return num1 * num2
}

console.log(multiplicaDoiInteiros(4, 5)) //20