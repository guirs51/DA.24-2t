/*
let matriz1 = [
  [1, 2, 3],
  [4, 5, 6]
]

console.log(matriz[1][2])

let matriz2 = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
]

console.log(matriz2[0][2])
console.log(matriz2[2][1])
console.log(matriz2[1][0]
)
 let matriz3 = []

 matriz3[0] = [1, 2, 3]
 matriz[1]  = [1, 5, 6]
 matriz[2]  = [7, 8, 9]

let jogoDAvelha = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

jogoDAvelha[1][2] = Number([1])
console.log(jogoDAvelha)

let matriz4 = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

for(let i = 0;  i < matriz4.length; i++){
  for(let j = 0; j<matriz4[i].length; j++){
    console.log(matriz4[i][i])
  }
}

let soma = 0
for(let i = 0;  i < matriz4.length; i++){
  for(let j = 0; j<matriz4[i].length; j++){
    soma += matriz4[i][j]
  } }

  console.log(soma)



  for(let i = 0;  i < matriz4.length; i++){
    for(let j = 0; j<matriz4[i].length; j++){
      matriz4[i][j]*=2
      console.log(matriz4[i][j])
    } }
*/

// exercicos 

let matriz = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]
let soma = 0
function percorrerMatriz(){
  for(let i = 0; i<matriz.length; i++){
    for(let j = 0; j<matriz[i].length; j++){
      console.log(matriz[i][j])
      soma += matriz[i][j]
    }
  }
  return soma
}
percorrerMatriz()

console.log("hello wolrd")

console.log(percorrerMatriz())