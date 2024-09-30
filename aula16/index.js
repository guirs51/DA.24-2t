/*
// EXERCICO DE FIXAÇÃO
//exercicios de intterpretação
function minhaFunçao(variavel){
    return variavel * 5
}
console.log(minhaFunçao(2))
console.log(minhaFunçao(10))
// a) vai ser imprimido no console os numeros 10 e 50 
// b) não vai ser imprimido nada 


let textoDoUsuario = prompt("insera um texto")


const outrafunçao = function(texto) {
        return texto.toLowerCase().includes("cenoura")
}

const resposta = outrafunçao(textoDoUsuario)
console.log(resposta)

// a)  essa função deixa imprimi no console o boolean true se o parametro for cenoura , e false se não for
// b)  true , true, true
*/

// exercicios de escrita

/*
function funçaoFrase() {
   let frase = "oi eu sou caio e tenho 23 anos, moro em são paulo e sou estudante"
   let eu = "gui"
   let idade = 17 
   let cidade = "sao leo"
   let estuda = true
if(estuda){ 
console.log("oi eu sou", eu ,"e tenho", idade, "anos, moro em ",cidade, "e sou estudante") }else{
    console.log("oi eu sou", eu ,"e tenho", idade, "anos, moro em ",cidade, "e não estudante")
}
}
funçaoFrase()


function somar(num, num2){
    let soma = num + num2
    return soma
}

function diminuir(num, num2){
    let subtrair = num - num2
    return subtrair
}

function dividir(num, num2){
    let divisao = num / num2
    return divisao
}

function multiplicar(num, num2){
    let multiplicacao = num * num2
    return multiplicacao
}

const pergunta = Number(prompt("digite um numero"))
const pergunta2 = Number(prompt("digite um numero"))

console.log(somar(pergunta, pergunta2))
console.log(diminuir(pergunta, pergunta2))
console.log(dividir(pergunta, pergunta2))
console.log(multiplicar(pergunta, pergunta2))
*/

//desafio

const minhaFunçao = (num) => {
  const numero = num;
  console.log(numero);
  const minhaFunçao2 = () => {
    const numero = 10;
    const segundoNum = 10;
    const soma = numero + segundoNum;
    console.log(soma);
  };
  console.log(numero, minhaFunçao2);
};

minhaFunçao();
