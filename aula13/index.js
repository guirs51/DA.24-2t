// EXERCICIOS DE FIXAÇAO

let valor = 0 
for (let i = 0 ; i <5; i++){
         valor += i
}

/* esse codigo cria uma variavel com o valor "0" chamada de "valor" e depois um laço onde do tipo "for". cria um variavel com valor de "0" chamado de "i" dentro do laço.  a condição é de "i" ser menor que 5. e tem um incremento de i++. logo a abaixo dentro do bloco do for a variavel "valor" recebe += i*/
//não tera resposta pois não foi declarado um "console.log" 


let lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

for(let numero of lista){
     if(numero > 18){
        console.log(numero)
     }
}

// A) vai ser impresso os numeros dentro do arrya lista, maiores que 18

// B) 

const quantidadeTotal = Number(prompt("digite um numero"))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
    let linha = ""
    for(let asterisco = 0; asterisco < quantidadeAtual + 1 ; asterisco++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
// a resposta sera quatro linha de * somando mais um a cada linha. 


// const bichinho = Number(prompt("quantos bichinhos de estimaçao voce tem?"))
// let ArraysDoPet = [] 
// if( bichinho <= 0 ) {
//     console.log("que pena. voce pode adotar um pet")
// } else if( bichinho > 0 ) {
//     for(let quaisPet = ""; quaisPet < bichinho; quaisPet++) {
//         ArraysDoPet.push(quaisPet)
//     }
// }
// console.log(ArraysDoPet)

const bichinhos = Number(prompt("quantos bichos tu tem: "))

let ArraysDoPet = []

if(bichinhos <= 0) {
    console.log("adote um")
}

else {
  let condicao = true

  while(condicao === true) {
    let nomes = prompt("nomes dos animal: ")
    ArraysDoPet.push(nomes)

    if(ArraysDoPet.length === bichinhos) {
        condicao = false
    }
  }
}

console.log(ArraysDoPet)

//

arrayOriginal = [34, 355, 232, 11, 14]
for(let numero of arrayOriginal){
  console.log(numero)
}
for(let numero of arrayOriginal){
  console.log(numero/10)
}
let arrayPares = []
for(let numero of arrayOriginal){
  if(numero%2===0){
    arrayPares.push(numero)
    console.log(arrayPares)
  }
}
let arrayfrase = []
for(let i= 0; i<arrayOriginal.length; i++){
  arrayfrase.push("o elemento do index"+i+"é"+arrayOriginal(i))
}console.log(arrayfrase)
let mairoNum = arrayOriginal[0]
let menorNum = arrayOriginal[0]
for(let numero of arrayOriginal){
  if(numero>mairoNum){
    mairoNum=numero
  }else if(numero<menorNum){
    menorNum= numero
  }console.log("menorNum é ",menorNum," maiorNum é", mairoNum)

}