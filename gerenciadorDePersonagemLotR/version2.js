const listaDePersonagens = [];

let listaDeacoes = [];

const personagemNUll = {
  nome: "",
  class: "",
  nivel: "",
  habilidadeInicial: "",
  HP: "",
  historicoAcoes: [],
};
function criarPersonagem(personagem) {
  const criandoPersonagem = (personagem = {
    ...personagemNUll,
    nome: String(prompt("digite o nome do seu personagem")),
    class: String(prompt("digite o nome da sua classe")),
    nivel: Number(prompt("digite o nivel do seu personagem")),
    habilidadeInicial: String(prompt("digite a sua habilidade inicial")),
    HP: Number(
      prompt("digite quanto de HP(pontos de vida) tera seu persongem")
    ),
  });
  listaDePersonagens.push(criandoPersonagem);
}
criarPersonagem(personagemNUll);
console.log(listaDePersonagens);
criarPersonagem(personagemNUll);

function ataqueNormal() {
  const ataque = "voce fez um ataque normal";
  console.log(ataque);
  listaDeacoes.push(ataque);
  personagemNUll.historicoAcoes.push(ataque);
}

function ataqueEspecial() {
  const ataque = "voce fez um ataque especial";
  console.log(ataque);
  listaDeacoes.push(ataque);
  personagemNUll.historicoAcoes.push(ataque);
}

function defesa() {
  const defesa = "voce usou uma defesa";
  console.log(defesa);
  listaDeacoes.push(defesa);
}

defesa();
ataqueEspecial();
ataqueNormal();
acoes(listaDePersonagens[1]);
console.log(listaDeacoes);

function acoes(listaDePersonagens) {
  listaDePersonagens.historicoAcoes.push(defesa());
  listaDePersonagens.historicoAcoes.push(ataqueNormal());
  listaDePersonagens.historicoAcoes.push(ataqueEspecial());
}

const buscar = prompt("digite um personage para buscar")
console.log(listaDePersonagens.find((personagem) =>  personagem.nome === buscar ))

const excluir = prompt("digite o nome de um personagem para excluir ele ")
console.log(listaDePersonagens.splice((personagem) => personagem.nome === excluir))

const listaAlfabética = listaDePersonagens["nome"].sort();

console.log(listaAlfabética)
