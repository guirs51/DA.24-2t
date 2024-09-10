// contador simples
/*
for (let i = 0;  i <= 10 ; i++){
    console.log(i)
}
*/

function cpf() {
    const cpf = document.querySelector(".cpf").value
console.log(Number(cpf))
}

//contador de numeros pares


// tabuada 
/*
let num =  Number( prompt("digite um numero"))
 
if( num > 0 ){
    for(let i = 0; i <= 10; i++){
        console.log(i * num)
    }
    
} 

// soma 

let i = 0 
let soma = 0
while(i <5){
    let num = Number(prompt("digite um numero")) 
    i++
    soma += num 
}
console.log(soma)

// notas médias 

let alunosNotaMedia = []
let alunos = 0
while(alunos <5){
    let notas = Number(prompt("digite a nota de 5 alunos")) 
    alunos++
    alunosNotaMedia.push(notas/2)
}
console.log(alunosNotaMedia)
*/

// jogo da forca
 
let arr = ["japao" , "mexico" , "chile", "canada"]
const palavraDoJoog = arr[Math.floor(Math.random()* arr.length)];



//validador de cpf
// simulador de caixa eletronico
//ordenação de array