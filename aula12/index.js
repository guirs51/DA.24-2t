 // LACOS

 //TIPOS DE REPETICOES - WHILE  
 
 /*
 let i = 0 
 while (i < 10) {
        console.log("o numero é:", i)
        i++;
 }


 let estomago = 0 
 while (estomago < 100) {
    console.log("quero comer mais coxinha", estomago)
    estomago = estomago + 1
 }
*/

/*
let numero = 10
let soma = 0 
while ( numero !== 0 ) {
   numero = Number(prompt("digite um numero"))
    soma += numero 
    console.log("o numero digitado foi:", numero)

}
console.log(soma)
*/

//TIPOS DE REPETICOES - do WHILE  

/*
let c = 1

do{
    console.log("o valor do contador é:", c )
} while (c <= 6)
*/

// tipos de repeticoes - FOR

/*
const numeros = [14,67,89,15,23]

for(let i = 0; i <5; i++ ){
        const elemento = numeros[i]
        console.log(elemento)
}
*/

//EXERCICIOS - FOR 

/*
const numeros = [11, 15, 18, 14, 12,13 , ]
let numeroMaior = numeros[0]

for(let i = 0; i <6; i++) {
    if(numeroMaior<numeros[i]){
        numeroMaior=numeros[i]
    } }
console.log("o numero maior é :" ,numeroMaior)
*/

/*
const numeros = [11, 15, 18, 14, 12,13 , ]
let soma = 0

for(let i = 0; i <6; i++) {
    if(numeros[i] % 2 === 0){
        soma += numeros[i]
    } }
console.log("soma dos numeros par é :" ,soma)
*/

// tipos de repeticoes - FOR OF

/*
const numeros = [14 ,67 ,89 , 15, 23]
for(let numero of numeros){
    console.log(numero)
}
*/

//EXERCICIOS  for of

/*
const palavras = ["oi", "sumido", "tudo" , "bem?", "saudades" ]
let juntarFrase = " " 

for( frase of palavras){
    juntarFrase += frase+ " " 
}
console.log(juntarFrase)
*/

/*
const numeros = [11, 15, 18, 14, 12,13 , ]
let soma = 0

for(let numero of numeros) {
    if(numero % 2 === 0){
        soma += numero
    } }
console.log("soma dos numeros par é :" ,soma)
*/

const palavras = ["gun", "james lee",]
let palavrasMaisLongas = [palavras[0]]
for(let palavra of palavras) {
  if(palavrasMaisLongas[0].length<palavra.length){
     palavrasMaisLongas.push
     (palavra)
  }
}

console.log(palavrasMaisLongas)