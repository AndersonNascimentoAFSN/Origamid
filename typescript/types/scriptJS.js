//@ts-check

const frase = 'Front End'
const total = 100.05
const empresas = ['Apple', 'Microsoft']
const body = document.body;

frase.toLocaleLowerCase();
// total.toLocaleLowerCase();
const totalFixed = +total.toFixed()

console.log(totalFixed)
console.log(totalFixed + 10)

empresas.map((empresa) => empresa.toLowerCase())

body.style.backgroundColor = '#000'

const button = document.querySelector('button')

if (button) {
  button.click()
}

// const operation = 100 + true
// const operation = 100 + {}
// console.log(operation)