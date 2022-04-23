//Verifique se a pessoa é maior de idade

let idade = 19
const maior = idade >=18
const menor = idade < 18

//if...else
if (maior) {
  console.log('maior de idade')
} else if (menor) {
  console.log('menor de idade')
} else {
  console.log( `${idade} - idade inválida`)
}

//switch...case
switch (idade >= 18) {
  case true:
    console.log('maior de idade')
    break
  case false:
    console.log('menor de idade')
    break
  default:
    console.log( `${idade} - idade inválida`)
    break
}

//operador ternário

maior ? console.log('maior de idade') : console.log('menor de idade')
