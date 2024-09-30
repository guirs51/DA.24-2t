/*
const professor = {
    nome: "lucas",
    idade: 32,
    altura: 1.75,
    email: "lucas@gmail.com",
    tarefas: ["dar aula", "responder perguntar"],
    contarPiada: function(){
        console.log("é pa ve ou pa come")
    }
}
console.log(professor.nome)
console.log(professor.idade)
console.log(professor.altura)
console.log(professor["email"])

professor.nome = "leo"
professor["email"] = "leo@gmail.com"

console.log(professor.nome)
console.log(professor["email"])
*/

//exercico 
/*
const filme = {
    nomeDoFilme: "o bicho vai pegar ",
    anoLancamento:  2005,
    diretores: ["Jill Culton" , "Roger Allers"],
    produtoras: ["Sony Pictures Animation" , "Columbia Pictures"],
    personagens: ["boog", "elliot", "shaw", "beth"]
}
console.log(filme.nomeDoFilme)
console.log(filme.anoLancamento)
console.log(filme["diretores"])
console.log(filme["produtoras"])
console.log(filme.personagens)
console.log(filme)
filme.personagens[0]= "xuxa"
console.log(filme.personagens[0])
const pessoa = {
    nome: "gab",
    idade: 19,
    gostoMusical: "rap"
}
console.log("o nome da pessoa é", pessoa.nome,"ela tem", pessoa.idade,"anos e gosta muito de", pessoa.gostoMusical)
*/
// acessando objeto dentro de objeto

const donoDoPet = {
    nome: "gui",
    idade: 17,
    pet:{
        nome:"fibis",
        raca: "vira lata",
        idade: 3
    }
}
console.log(donoDoPet.pet.nome)

const curso = {
    nome: "Noturno Frontend",
    liguagens: ["js", "css", "html"]
}
console.log(curso.liguagens[2])

curso.numerosEstudantes = 50 
curso[`numeroProfessores`]= 10
console.log(curso.numerosEstudantes, curso.numeroProfessores)

const professores = [{nome: "lucas", modulo: 1}, {nome: "leo", modulo: 1} ,{nome: "mika", modulo: 1}]
console.log(professores[2].nome)

// spreadd

const usuario = {
    nome: "gui",
    idade: 17,
    email: "gui@gmail",
    cidade: "são leopoldo"
}

const novousuario = {
    ...usuario,
    nome: "lucas",
    idade: 32
}

console.log(novousuario)

const nomeDosProfs = ["lucas", "leo"]

const novalistaProfs = [...nomeDosProfs,]
console.log(novalistaProfs)

//exercico

const funcaoPessoa = function(num) {
                let a = num
        const pessoa = {
            ...usuario,
            comidasPreferidas: ["masssa com strognof", "lasanha", "pizza"],
            melhorAmigo: {
                nome: "pablo",
                idade: 17
            }
            
        }
        console.log("o nome da pessoa é"+ pessoa.nome +"e suas comidas preferidas são"+ pessoa.comidasPreferidas[0]+ pessoa.comidasPreferidas[1]+"e"+comidasPreferidas[2]+". seu melhor amigos se chama"+pessoa.melhorAmigo.nome+"e tem"+ pessoa.melhorAmigo.idade + "anos")
}

funcaoPessoa()
 

// exercicio 

let personagensDeNJJK = [{nome: "gojo" , idade: 19 , grau: "especial", } , {nome: "sukuna" , idade: 21 , grau: "especial", }, {nome: "yuta" , idade: 21 , grau: "especial", }] 

const gojoPoderes = ["energia reversa" , "vazio roxo" , "vazio infinito "]
const sukunaPoderes = ["energia reversa", "desmnatelar ","santuario malevolente"]
const yutaPoderes = ["energia reversa", "copia","amor abrangente inequivoco"]

const novosPersonagens = function(){
        const zenin = "toji"
         personagensDeJJK += zenin
}
