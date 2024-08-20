   //operadore logicos

/*
const primeirovalor = true 
const segundoValor = true 

const resultado = primeirovalor && segundoValor

console.log(resultado)
*/

/*
    // exercicios
const a = true 
const b = false 
const c = true 

let resultado = a && b 
console.log(resultado)

resultado = b && c 
console.log(resultado)

resultado = a && c 
console.log(resultado)

resultado = a && b && c
console.log(resultado)
*/
 
/*  
const primeiroValor = false 
const segundoValor = true

 let resultado = primeiroValor || segundoValor
 console.log(resultado)

 const tercieroValor = false 
 const quartoValor = false
 
  let resultado2 = tercieroValor || quartoValor
  console.log(resultado2)
*/

/* //exercicios
const a = true 
const b = false 
const c = true 

let resultado = a || b
console.log(resultado)

resultado = b || c
console.log(resultado)

resultado = a || c
console.log(resultado)

resultado = a || b || c 
console.log(resultado)
*/

/*
const primeiroValor = true

const resultado = !primeiroValor
console.log(resultado)

const segundoValor = false

const resultado2 = !segundoValor
console.log(resultado2)
*/


const nome = prompt("seu nome")
console.log(nome)
const   anoDeNasci = Number(prompt("qual é seu ano de nascimento"))
const anoAtual = prompt("qual o ano atual")
const idade = anoAtual - anoDeNasci
console.log("idade:", idade)
const maiorDeIdade = idade >= 18 
console.log("é maior de idade:", maiorDeIdade)
const diferenteAnos = 2050 - anoAtual
const idadeEm2050 =  idade + diferenteAnos
console.log("idade em 2050", idadeEm2050)