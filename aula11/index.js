//      EXERCICIOS DE FIXIÇÃO

//exercicio de interpretação de codigo

/*
const respostaDoUsuario = prompt("digite o numero que voce quer testar")//criando uma variavel com o valor sendo um prompt onde o usuario coloca um numero
const numero = Number(respostaDoUsuario)//criando uma variavel onde trasforma o a resposta do usuario em number. exe: "2"(string) para 2(number)

if (numero % 2 === 0) {//fazendo um if  que pega o resto do numero do usuario e compara se ele é igual a zero
    console.log("passou no teste")// console.log imprimindo "passou no teste" se o condição for verdadeira
} else { // um else se a condição de cima for falsa 
    console.log("não passou no teste")//console.log imprimindo "não passou no teste" se o condição for falsa
}
*/

/*
let fruta = prompt("escolha uma fruta")// varivael com um valor de prompt onde o usario digita uma fruta
let preco // variavel(preco) sem valor atribuido
switch (fruta) {  // switch case com fruta como parametro
    case "laranja":   
      preco = 3.5 // se o parametro for laranja a variavel(preco) tera esse valor
      break // para a execução do codigo quando a condição do codigo é atendida
    case "Maça":
      preco = 2.25 // se o parametro for maça a variavel(preco) tera esse valor
      break // para a execução do codigo quando a condição do codigo é atendida
    case "uva":
      preco = 0.30 // se o parametro for uva a variavel(preco) tera esse valor
      break  // para a execução do codigo quando a condição do codigo é atendida
    case "pera":
      preco = 5.5 // se o parametro for pera a variavel(preco) tera esse valor
      break
      default: // se fruta não tiver o valores de cima
        preco = 5// se o parametro for laranja a variavel(preco) tera esse valor  
      break // para a execução do codigo quando a condição do codigo não é atendida
}

console.log("o preço da fruta", fruta, "é" , "R$" , preco)// imprimindo uma frase junto com as variavel fruta e preco

//a) para descobrir o valor de uma fruta

//b) o preço da fruta maca é R$ 5

//c)o preço da fruta pera é R$ 5

*/

/*
const numero = Number(prompt("digite o primeiro numero"))//criando uma variavel com o valor sendo um prompt onde o usuario coloca um numero

if (numero > 0 ) { // parametro que compara se o numero da variavel é maior que zero
    console.log("esse numero passou no teste ")// imprimindo uma mensagem se a condição for verdadeira
    let mensagem = "essa mesangem é secreta" // criando uma varivavel 
}

console.log(mensagem)


//a) criando uma variavel com o valor sendo um prompt onde o usuario coloca um numero

//b)  se o valor do usuario for 10 a resposta vai se "esse numero passou no teste". e se for -10 não tera resposta

//c) sim, não vai rodar mesangem por que ela esta dentro de um if 
*/

/*
const idade = Number(prompt("qual é sua idade"))

if (idade >= 18 ) {
    console.log("pode dirigir")
} else {
    console.log("não pode diriger")
}
*/



// DESAFIO 

const nomeCompleto = prompt("nome completo") 

console.log(nomeCompleto)

const tipoDeJog = prompt("IN(internacional),  DO(domestico)")
let IN  =  "in" 
const DO = "do"
const etapaDojogo = prompt("escola a etapa do jogo: SF(semi-final) ,DT(decisao do terceiro lugar), FI(final)")

const categoria1SF = 1320.00
const categoria1DT = 660.00
const categoria1FI = 1980.00

const categoria2SF = 880.00
const categoria2DT = 440.00
const categoria2FI = 1320.00

const categoria3SF = 550.00
const categoria3DT = 350.00
const categoria3FI = 880.00

const categoria4SF = 220.00
const categoria4DT = 170.00
const categoria4FI = 330.00

if (tipoDeJog === IN)  {
    
    switch(etapaDojogo){
        case "SF":
            console.log(" tipo internacional: categoria 1:", categoria1SF * 5.65, "categoria 2:", categoria2SF * 5.65, "categoria 3:", categoria3SF * 5.65,"categoria 4:", categoria4SF * 5.65)
            break
            case "DT":
                console.log("categoria 1:", categoria1DT * 5.65 , "categoria 2:", categoria2DT  * 5.65 , "categoria 3:", categoria3DT * 5.65 ,"categoria 4:", categoria4DT * 5.65)
                break
                case "FI":
                    console.log("categoria 1:",categoria1SF  * 5.65, "categoria 2:", categoria2SF * 5.65, "categoria 3:", categoria3SF * 5.65,"categoria 4:", categoria4SF * 5.65)
                    break
    }
} else if (tipoDeJog === DO){
        
    switch(etapaDojogo){
        case "SF":
            console.log(" tipo domestico: categoria 1:", categoria1SF, "categoria 2:", categoria2SF , "categoria 3:", categoria3SF,"categoria 4:", categoria4SF)
            break
            case "DT":
                console.log("categoria 1:", categoria1DT, "categoria 2:", categoria2DT , "categoria 3:", categoria3DT,"categoria 4:", categoria4DT)
                break
                case "FI":
                    console.log("categoria 1:",categoria1SF , "categoria 2:", categoria2SF, "categoria 3:", categoria3SF,"categoria 4:", categoria4SF )
                    break
    }
}


//let compra = prompt("qual categoria vc quer?")


const quantidadeDeingressos = 2489 

let ingresso = Number(prompt("quantidade de ingresso"))

const novaQuantidadeDeingressos = quantidadeDeingressos - ingresso

if (novaQuantidadeDeingressos > 0) {
    console.log("tem um total de", novaQuantidadeDeingressos , "ingressos") 
}


