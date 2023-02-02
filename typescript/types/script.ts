const frase: string = "Front End";
const total: number = 100.05;
const empresas: string[] = ["Apple", "Microsoft"];
const body = document.body;

frase.toLocaleLowerCase();
// total.toLocaleLowerCase();
const totalFixed: number = +total.toFixed();

console.log(totalFixed);
console.log(totalFixed + 10);

empresas.map((empresa) => empresa.toLowerCase());

// body.style.backgroundColor = "#000";

const button = document.querySelector("button");

if (button) {
  button.click();
}

// const operation = 100 + true
// const operation = 100 + {}
// console.log(operation)

// Type Annotations

const produtos = [
  { name: "Dark Souls", type: "jogo" },
  { name: "O senhor dos Anéis", type: "livro" },
  { name: "A Guerra dos Tronos", type: "livro" },
];

type products = typeof produtos

// interface product {
//   name: string;
//   type: string;
// }

function filtrarLivros(dados: products) {
  return dados.filter((item) => item.type === 'livro')
}

console.log(filtrarLivros(produtos))

function somar(a: number, b: number): number {
  return a + b;
}

console.log(somar(1, 2))

const product: string = 'Livro';
const price: number = 20

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5
}

// Exercício 1

function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase()
}

console.log(normalizarTexto('  ANDErSON  '))

// Exercícios 2

const input = document.querySelector('input')

function calcBonus(){
  const p = document.querySelector('#bonus');
  if (p && input) {
    const total = +input.value
    p.textContent = `Ganho total: ${total + 100 - (total * 0.2)}`
    localStorage.setItem('total', p.textContent)
  }
}

if (input) {
  input.addEventListener('keyup', calcBonus)
}