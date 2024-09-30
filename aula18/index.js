//   EXERCICIO DE FIXAÇÃO
//intepretação
const filme = {
    nome: "auto da compadencia",
    ano: 2000,
    elenco: [
        "matheus nachtergaele", "selton mello", "denise fraga",
        "virgina canvadish"
    ],
    trasmissoesHoje: [
        {canal: "telecine", horario: "21h"},
        {canal: "canal brasil", horario: "19h" },
        {canal: "globo" , horario: "14h"}
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.trasmissoesHoje[2])
// A) a linha 17  esta imprimindo a string "matheus nachtergaele". a linha 18 esta imprimindo a string "virgina canvadish". a linha 19 esta imprimindo o segundo objeto dentro do array trasmissoesHoje

const cachorro = {
    nome: "juca",
    idade: 3,
    raca: "SRD"
}

const gato = {...cachorro, nome: "juba"}

const tartaruga = {...gato, nome: gato.nome.replace("a" , "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//A) a linha 32 esta imprimindo o obejto cachorro com os valores de: nome: juca,  idade: 3, raca: "SRD"
// a linha 33 esta imprimindo o obejto gato com os valores de: nome: juca,  idade: 3, raca: "SRD", nome: "juba"
// a linha 34 esta imprimindo o obejto tartaruga com os valores de: nome: juca,  idade: 3, raca: "SRD", nome: "juba" nome: "jubo"
//B) ele pega os valores desse objeto 


function minhaFunçao(objeto, propriedade) {
    return objeto[propriedade]
}
const pessoa = {
    nome: "caio",
    idade: 23,
    backender: false
}

console.log(minhaFunçao(pessoa, "backender"))
console.log(minhaFunçao(pessoa, "altura"))
// A) na linha 51 sera inprimido false e na linha 52 sera inprimido underfined
//B) 

//exe1
const lookims = {
    nome: "dagyon",
    apelidos: ["lenda de 1° geração", "lee jihon" , "DG"]
}

function funcionLookims(objeto) {
    console.log(" eu sou dagyon, mas pode me chamar de", objeto.apelidos[0] ,",", objeto.apelidos[1], "ou" ,objeto.apelidos[2])
}
funcionLookims(lookims)

const lookimsegundagen = {
    ...lookims,
    apelidos: ["shiro oni", "weapon master", "lutador prodigio "]
}

funcionLookims(lookimsegundagen)

//exe2
const pessoa1 = {
    nome:"gabriel",
    idade: 17,
    profissao: "programador back-end"
}

const pessoa2 = {
    nome:"marcos",
    idade: 17,
    profissao: "programador front-end"
}


function meusObjetos(obejto){
    console.log( typeof(obejto.nome), obejto.nome.length , typeof(obejto.idade), typeof(obejto.profissao), obejto.profissao.length)
}

meusObjetos(pessoa1)
meusObjetos(pessoa2)

//exe3
const carrinho = []

const fruta1 = {
    nome: "uva", 
    disponibilidade:  true
}

const fruta2 = {
    nome: "maça", 
    disponibilidade: true
}

const fruta3 = {
    nome: "pessego", 
    disponibilidade: true
}

function carrinhoFrutas(fruta) {
    const minhaFruta = fruta
    carrinho.push(minhaFruta)
    return minhaFruta
}

carrinhoFrutas(fruta1)
carrinhoFrutas(fruta2)
carrinhoFrutas(fruta3)
console.log(carrinho)
