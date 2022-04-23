//criar, acessar, incluir e deletar

//objeto

const person = {
  name:'Si',
  age: 33,
  grad:'marketing',
  temFilhos: false,
}
// console.log(person.registro, person.social, person.age)
//acessar as propriedades com desestruturação

const { registro, social, age } = person

// console.log(registro, social, age)

person.role = 'dev'
// console.log(person)

//criar uma copia de person e alterar itens (spread operator)

const person2 = {...person, role: 'prof'}

// console.log(novaPessoa)

//array

let alunas = ['Gaia', 'Jane', 'Lay', 'Agnes', 'Andreza']
alunas.push('Rosiene')

alunas = ['Naiane', 'Aline', ...alunas]
//console.log(alunas)

//array de objetos

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

//quero imprimir no console a última aluna
console.log(turma[turma.length-1])

//primeiro
console.log(turma[0])