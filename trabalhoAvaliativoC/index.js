
const personagens =  [ // array de personagens
    {nome: "link", vida: 2, forca: 10 , resitencia: 10},
    {nome: "zelda", vida: 20, forca: 10, resitencia: 10},
    {nome: "!", vida: 2, forca: 10, resitencia: 10},
]

const arma = [ // array de armas
    {tipo: "master sword", dano: 10 , alcance: 5},
    {tipo: "arco", dano: 6 , alcance: 15}
]

const itens = [  // array de itens
    {nome: "bomba", efeito: "explode"},
    {nome: "poção", efeito: "curar a vida"},
    {nome: "rupees", efeito: "comprar algo"}
]

let caracteres = ["",'',"!","@","#","$","$"] // fazer 


function validarPersonagens(personagens){
    for( const p of personagens){
        if(typeof p.nome !== `string` || p.nome === `number`){  // valida se o nome do personagem tem tipo strig 
          return `Erro: Personagem com nome inválido.` // mensagem imprimida no console se o tipo do nome do personagem não for strig
        }
        if( typeof p.vida !== `number` || p.vida < 1 || p.vida > 20){ // valida a quantida de vida que o personagem pode ter
          return `Erro: O personagem ${p.nome} tem corações de vida fora do intervalo` // mesagem imprimida no console se a vida do personagem for menos ou mais do esperado
        }
    }
    return `personagens validos` //imprimi no console que o array de personagens esta de acordo com o esperado para o jogo 
}

function validarArmas(arma){
    for(const a of arma){
        if( typeof a.tipo !== `string`){ // valida se o nome da arma  tem tipo strig 
            return `Erro: Arma com tipo inválido.` // mensagem imprimida no console se o tipo  da arma não for strig
        }
        if(typeof a.dano !== `number` || a.dano < 1 || a.dano > 30){// valida a quantida de dano que a arma pode ter
            return `Erro: A arma ${a.tipo} tem dano inválido.` // mensagem imprimida no console se a arma do personagem da menos ou mais dano do esperado
        }
            if(typeof a.alcance !== `number`|| a.alcance < 5 || a.alcance > 15 ){// valida o alcance que  a arma pode ter
                return `Erro: A arma ${a.tipo} tem alcance inválido.` // mensagem imprimida no console se o alcance  do arma tiver menos ou mais do esperado
            }
    }
    return `Armas validadas com sucesso!` //imprimi no console que o array de armas esta de acordo com o esperado para o jogo 
}

function validarItens(itens){
    for(const i of itens){
        if(typeof i.nome !== `string`){  // valida se o nome do item  tem tipo strig 
            return `Erro: Item com nome inválido.` // mensagem imprimida no console se o nome do item do não for string
        }
        if(typeof i.efeito !== `string`){  // valida se o efeito do item  tem tipo strig 
            return `Erro: Item ${i.nome} com efeito inválido.` // mensagem imprimida no console se o efeito do item  não for string
        }
    }
    return "Itens validados com sucesso!" //imprimi no console que o array de itens esta de acordo com o esperado para o jogo 
}

console.log(validarPersonagens(personagens))
console.log(validarArmas(arma))
console.log(validarItens(itens))
