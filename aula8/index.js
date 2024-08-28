/*
const numeros = [1, 2 , 3 , 4 , 5 , 6 ]

console.log(numeros.length)
numeros.push(7)
console.log(numeros, numeros.length)
numeros.splice(4, 1)
numeros.splice(3, 1)
console.log(numeros)
console.log(numeros.length)
*/


// exercicos de fixação 
/*
const frase = prompt("digite uma frase")
console.log(frase.toUpperCase().replaceAll("A" , "i"), frase.length)// se o valor impresso no console for: Subi num ônibus em Marrocos" 
//vai ser imprimido: SUBI EM UM ÔNIBUS EM MiRROCOS 27*/

/*
const nomeDoUser = prompt("qual seu nome")
const emailDoUser = prompt("qual seu email")

const frase = "o e-mail" + emailDoUser + "foi cadastrado com sucesso. seja bem-vindo" + nomeDoUser
console.log(frase)
*/

/*
const minhasComidasFavoritas = ["massa", "pizza", "coxinha", "strognof", "pastel"]

console.log(minhasComidasFavoritas)
console.log("essas são minhas comidas preferidas:")
console.log(minhasComidasFavoritas[0])
console.log(minhasComidasFavoritas[2])
console.log(minhasComidasFavoritas[3])
console.log(minhasComidasFavoritas[4])
console.log(minhasComidasFavoritas[1])
const comidaDoUser = prompt("qual é sua comida preferida?")
console.log(minhasComidasFavoritas[1] = comidaDoUser)
*/

const listaDeTarefas = []
const tarefa1 = prompt("diga uma tarefa")
const tarefa2 = prompt("diga uma tarefa")
const tarefa3 = prompt("diga uma tarefa")

listaDeTarefas[0] = tarefa1 
listaDeTarefas[1] = tarefa2
listaDeTarefas[2] = tarefa3
console.log(listaDeTarefas)
const tarefaRealizada = prompt("digite o indice da tarefa realizada")
console.log(listaDeTarefas.splice(listaDeTarefas, tarefaRealizada))