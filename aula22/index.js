/*let numeros = [1,2,3,4,5]
let soma = 0 

for(let i = 0; i<numeros.length; i++){
    soma+= numeros[i]
}
console.log(soma)*/

/*function fatorial(n){
    let resultado =  1
    for(let i = n; i> 0; i--){
        resultado *=  i;
        console.log(`i ${i} \n resultado ${resultado}`)
    } return resultado
}
console.log(fatorial(5)); */

/*let numeros =[1,2,3,4,5]
let soma = 0

for(let i = 0; i<numeros.length; i++){
    console.log(`i: ${i}, numeros[i]: ${numeros[i]}, soma antes: ${soma}`);
    soma += numeros[i]
    console.log(`soma: ${soma}`)
}
console.log(`resultado: ${soma}`)*/

// exercico

/*let numeros = [1,2,3,4,5,]
let somaPares = 0
console.log(numeros)
for(let i = 0; i<numeros.length; i++){
    console.log(numeros)
    if(numeros[i] % 2 === 0){
        console.log(numeros)
        somaPares += numeros[i]
    }
}
console.log(somaPares)*/

function jogoPontuacao(jogadas){
    let pontuacao = 0
    for(let i = 0; i<= jogadas.length; i++){
        if( jogadas[i] === "voce ganhou"){
            pontuacao += 3
        }else if (jogadas[i] === "empatou"){
            pontuacao += 1
        }else if( jogadas[i] === "perdeu"){
            pontuacao -= 1
        }
    }
    return pontuacao
}

let  resultadoFinal = jogoPontuacao(["ganhou", "mepatouu", "perdeu", "ganhou"])
console.log(`pontuação final: ${resultadoFinal}`)