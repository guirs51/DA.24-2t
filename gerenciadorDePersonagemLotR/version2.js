const listaDePersonagens = []

let listaDeacoes = []

const personagemNUll = {
    nome: "", 
    class: "",
    nivel: "",
    habilidadeInicial: "",
    HP: "",
    historicoAcoes: [{ataqueEspecial: []},{ataqueNormal: []},{ defesa: []}]
}
function criarPersonagem(personagem){
    const criandoPersonagem = personagem = {
        ...personagemNUll,
        nome: String(prompt("digite o nome do seu personagem")),
        class: String(prompt("digite o nome da sua classe")),
        nivel: Number(prompt("digite o nivel do seu personagem")),
        habilidadeInicial: String(prompt("digite a sua habilidade inicial")),
        HP: Number(prompt("digite quanto de HP(pontos de vida) tera seu persongem"))
    }
    listaDePersonagens.push(criandoPersonagem)
}
criarPersonagem(personagemNUll)
console.log(listaDePersonagens)
criarPersonagem(personagemNUll)

function ataqueNormal() {
const ataque = "voce fez um ataque normal"
console.log(ataque)
 listaDeacoes.push(ataque)
}

function ataqueEspecial() {
    const ataque = "voce fez um ataque especial"
console.log(ataque)
 listaDeacoes.push(ataque)
}

function defesa() {
    const defesa = "voce usou uma defesa"
console.log(defesa)
 listaDeacoes.push(defesa)
}

defesa()
ataqueEspecial()
ataqueNormal()
console.log(listaDeacoes)

function acoes() {
    personagemNUll.historicoAcoes.push(listaDeacoes)
    console.log(listaDePersonagens)
}
acoes()

