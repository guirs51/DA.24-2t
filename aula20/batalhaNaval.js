let tabuleiro = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

console.log(tabuleiro)

function navois(){
    tabuleiro[1][0] = Number([1])
    tabuleiro[6][0] = Number([1])
    tabuleiro[1][5] = Number([1])
    tabuleiro[2][3] = Number([1])
    tabuleiro[1][1] = Number([1])
    tabuleiro[5][0] = Number([1])
    tabuleiro[7][4] = Number([1])
    tabuleiro[1][0] = Number([1])
    tabuleiro[4][4] = Number([1])
    tabuleiro[8][8] = Number([1])
    tabuleiro[1][9] = Number([1])
}
let quantidadeDeNavios = 0
for(let i = 0; i<tabuleiro.length; i++){
    for(let j=0; j<tabuleiro[i].length; j++)
        quantidadeDeNavios+=tabuleiro[i][j]
}

let escolhalinha = Number(prompt("escolha a linha que deseja atacar"))
let escolhaColuna = Number(prompt("escolha a coluna que dejesa atacar"))

function vereficarPosicao(linha, coluna){
        if(tabuleiro[linha][coluna] === 1){
            console.log("acertou")
        }else if(tabuleiro[linha][coluna] === 0){
          console.log("errou")
        }else{
            console.log("ja foi escolhido")
        }
}
