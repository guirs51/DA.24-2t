// condicionais 
/*
let condicao1 = true

if (condicao1) { 
    //acao
    console.log("exibiu condicao1")
}

let condicao2 = false 

if(condicao2) {
    //acao
    console.log("exibiu condicao2")
}


let num1 = Number(prompt("digirte um numero"))
let num2 = Number(prompt("digirte um numero denovo"))

if (num1 === num2) {
    console.log("num1 e num2 são iguais")
} 
*/

/*
let condicao1 = false 

if (condicao1) {
    console.log("a condicao e verdadeira ")
} else {
    console.log("a condicao é falsa")
}
*/

/*
const num1 = Number(prompt("qual seu numero"))
const num2 = Number(prompt("digirte um numero denovo"))

if (num1 === num2) {
    console.log("sao iguais")
} else { 
    console.log("não sao iguais")
}
*/

/*
let condicao1 = false 
let condicao2 = true 

if (condicao1) {
    console.log("oi")
} else { 
    console.log("condicao 1 é falso")
    if(condicao2) {
        console.log("condiçao 2 é verdadeiro")
    }
}
*/

/*
let condicao1 = false 
let condicao2 = false

if (condicao1){
    console.log("condiçao 1 e verdadeira")
} else if (condicao2) {
     console.log("condçao 2 e verdadeira")
} else {
    console.log("entrou no else")
}
*/

/*
let num1 = Number(prompt("digite um numero"))
let num2 =  Number(prompt("digite um numero"))

if ( num1 < num2){
    console.log(" num1 é menor que num2")
} else if (num1 > num2) {
     console.log("num1 e maior que num2")
} else if (num1 === num2 ){ 
      console.log("os numeros são iguais")
}
*/

//SWITCH CASE

/*
let paisDeOrigem = prompt("digite o pais de origem")

switch (paisDeOrigem) {
    case 'brasil': 
        console.log("brasileiro")    
        break
    case 'eua':
        console.log("norte americano")    
        break
    case 'russia':
        console.log("russo")
        break    
    default : 
        console.log("Nenhuma nacionalidade encontrada")
}
*/

/*
let  pokemonInicial = prompt("escolha um dos pokemons inicial: bullbasauro(planta e veneno); charmander(fogo): squirtel(agua);")

switch (pokemonInicial) {
    case 'bullbasauro':
        console.log("voce escolheu o bullbasauro(planta e veneno)")
        break
    case 'charmander':
        console.log("voce escolheu o chamander(fogo)")
        break
    case 'squirtel':
        console.log("voce escolheu o squirtel(agua)")   
        break
        default:
            console.log("pokemon não encontrado") 
}
*/

/*
let CasaDeHogwrts = prompt("escrava uma casa de  Hogwarts:")

switch (CasaDeHogwrts) {
    case 'grifinoria':
      console.log("hermione(grifinoria)")
    break
    case 'lufa-lufa':
        console.log("ana(lufa-lufa) ")
      break
      case 'corvinal':
        console.log("luna(corvinal)")
      break
      case 'sonserina':
        console.log("narcisa(sonserina)")
      break
      default:
        console.log("casa não encontrada")
}
*/

/*
// condicionais e operadore logicos

let condicao1 = true
let condicao2 = false

if (condicao1 && condicao2) {
    console.log("as duas condicoes são verdadeira")
} else { 
    console.log("alguma  condições é falsa")
}

if (condicao1 || condicao2) {
    console.log("alguma  condições é  verdadeira")
} else { 
    console.log("alguma  condições é falsa")
}
*/

/*
const completouEnsinoMedio = Boolean(prompt("vc comopletou o ensino medio? true or false"))
let idade = Number(prompt("qual sua idade"))
const EstaCursandoOutraFacul =  Boolean(prompt("voce esta cursando outra faculdade? true or false"))

if (idade >= 18) {
    console.log("voce tem idade para a faculdade")
} else {
    console.log("voce não pode cursa a faculdade. espera mais uns anos")
}

if (completouEnsinoMedio) {
     console.log("voce pode pode cursar o faculdade")
} else {
    console.log("voce pode cursa a faculdade")
} 

if (EstaCursandoOutraFacul !== true ) {
    console.log("não pode cursa essa faculdade")
} else {
    console.log("pode cursa essa faculdade")
} 
*/


//const vamosJogar = Boolean(prompt("vamos jogar?"))


const avisoDoJogo = alert("vamos jogar pedra , papel , tesoura, largato e spoock!! o jogo segue estas regras: pedra esmaga tesoura. pedra esmaga largato. papel cobre pedra. papel desqualifica spoock. tesoura corta papel. tessoura decapita lagarto. largato envenena spoock. largato come papel. spookc vaporiza pedra. spoock quebra tesoura ") 


const jogo = promt("escolha entra pedra , papel , tesoura, largato e spoock")


switch(jogo) {
      case 'spoock': 
      console.log("papel")
       break
      case 'tesoura':
      console.log("pedra")
       break
       case 'largato':
        console.log("pedra")
         break
         case 'pedra':
            console.log("papel")
             break
             case 'papel':
                console.log("largato")
                 break
}
