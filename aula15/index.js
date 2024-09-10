// funções
/*
function calcularArea(largura, altura) {
    const area = largura * altura 
    console.log(area)
}


calcularArea(2,3)
calcularArea(5,4)

calcularArea(25, 10)


function imprimerOlaMundo(){
    console.log("ola mundo")
}
imprimerOlaMundo()
imprimerOlaMundo()

function imprimirome(nome){
    console.log("bem vindo", nome)
}

imprimirome("gui")

//exercicios
//1
function turmaTds(turma){
    console.log("bem vindo turma", turma)
}
turmaTds("24-2t")

//2
function calc(num1, num2){
    const soma = num1 + num2
    console.log(soma)
}
calc(80, 4)
//3
function numero(num){
    const numero = num * 2
    console.log(numero)
}
numero(8)

//exercicios

//1 
function nome(nome){
    console.log(`ola ${nome}`)
}
nome("gui")
//2
function soma(num1, num2 ){
    const somar = num1 + num2
    console.log(`a soma é ${somar}`)
}
soma(2, 4)

//jogo
function pessoa(nome){
console.log(`voce é tri ${nome}`)
}
pessoa("joão")
*/
//funções (retorno)

/*
function calcularArea(largura, altura){
   const resultado = largura * altura
   return resultado
}

let area = calcularArea(2,5)
console.log("a area é:" ,area)
console.log("a area é:", calcularArea(2,5))


function numeros(num, num1, num2){
    const arrayDeNumeros = [ num /2, num1 , num2/2 ]
    return arrayDeNumeros
}

console.log(numeros(18, 19, 20))

// segunda forma de fazer 

const numerosorginal = [200, 1000, 500]

function primeiroeUltimo(arrayNumeros){
    const novoArray = []
    novoArray.push(arrayNumeros[0])
    novoArray.push(arrayNumeros[arrayNumeros.length-1])
    return novoArray 
}
console.log(primeiroeUltimo(numerosorginal))
*/

//expressões de funções

/*
const calcularArea = function(largura, altura){
    const soma = largura * altura
    return soma
}

const resultado = calcularArea(2, 5)
console.log(resultado)
*/

// arrow functions 

const calcArea = (largura, altura) => {
    const area = largura * altura 
    return area
}

const area = calcArea(2, 7)
console.log("a area é:", area)

//exercicio

const numero = function(num , num1){
     const soma = num + num1 
     return soma
}

const resultado = numero(5, 5)
console.log(resultado)

const dobrarNumero = (num) => {
    const numero = num * 2
    return numero
}

const numeroDobrado = dobrarNumero(40)
console.log(numeroDobrado)

const determinaMonstro =  ([]) =>{
        const arrayDoMostro = ["trasfomaComLuaCheia", "temPeleGelada"]
    if(arrayDoMostro === "trasfomaComLuaCheia" ){
        console.log("o mostro é um lobisomen")
    }else if ( arrayDoMostro === "temPeleGelada" ){
        console.log(" o mostro é um vampiro")
    }else {
        console.log("é um humano e não um mostro")
    }
    return arrayDoMostro
}

const mostro = determinaMonstro([1])

console.log(mostro)