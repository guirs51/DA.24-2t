/*
// EXERCICIOS DE FIXAÇÃO 
let matrix = [
    [2,4,6],
    [8,10,12],
    [14,16,18]
]

console.log(matrix[2][1])
// a) sera imprimido o valor 16. por que o console estas imprimindo  a linha 2 e a coluna 1 da matrix
*/

/*
let matrix = [
    [1,2],
    [3,4],
    [5,6,7]
]
for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
        if(matrix[i][j] % 2 === 0){
            console.log(matrix[i][j])
        }
    }
}

// a) os numeros que vão ser imprimido são 2 , 4 e 6, por que o algoritmo imprimi somente os numeros pares
*/

/*
let matrix = [
    [5,10,15],
    [20,25,30],
    [35,40,45]
]

let soma = 0
for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
        soma+= matrix[i][j]
    }
}
console.log(soma)
// a) o  valor imprimido vai ser 225.  ele foi calculado atraves de dois lacos que percorreu ele. um que percorreu a linha e outro que percorreu a coluna
*/

/*
let mapa = [
    [2,1,0,1,2],
    [1,2,2,1,2],
    [0,1,0,2,0],
    [0,2,2,1,1],
    [2,0,1,2,1]
]
for(let i = 0; i<mapa.length; i++){
    for(let j = 0; j<mapa.length; j++){
        if(mapa[i][j] === 2){
            mapa[0] = [2,2,2,2,2]
        }
        if(mapa[i][j] === 2){
            mapa[1] = [2,2,2,2,2]
        }
        if(mapa[i][j] === 1){
            mapa[2] = [1,1,1,1,1]
        }
        if(mapa[i][j] === 1){
            mapa[3] = [1,1,1,1,1]
        }
        if(mapa[i][j] === 0){
            mapa[4] = [0,0,0,0,0]
        }
    }
}
console.log(mapa)
*/

/*
let jogo = [
    [5,10,0],
    [5,5,10],
    [5,0,5],
    [10,5,10]
]
let soma = 0
 for( let a = 0; a<jogo.length; a++){
    soma+= jogo[a][0]
}
let soma2 = 0
 for( let a = 0; a<jogo.length; a++){
    soma2+= jogo[a][1]
}
let soma3 = 0
 for( let a = 0; a<jogo.length; a++){
    soma3+= jogo[a][2]
}
console.log(soma,soma2,soma3)
*/

/*
let matrix = [
    [1,,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
]
for(let i = 0; i<matrix.length; i++){
    matrix[i].reverse()
}
console.log(matrix)
*/

// DESAFIO  

let parkJ = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]