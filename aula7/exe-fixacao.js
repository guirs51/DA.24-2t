const bool1 = true  // declarando uma variavel e dizendo que o valor é "true"
const bool2 = false // declarando uma variavel e dizendo que o valor é "false"
const bool3 = !bool2// declarando uma variavel  e dizendo que o seu valor é o contrario da segunda variavel

let resultado = bool1 && bool2 // declarando um variavel que compara o valor da primeira e segunda variavel
console.log("a. ", resultado)// imprimindo no terminal a quarta variavel. e a resposta sera: false

resultado = bool1 && bool2 && bool3// mudando o valor da quarta varaial. comparado a primeira, a segunda e a terceira variavel
console.log("b. ", resultado)// imprimindo no terminal a quarta variavel. e a resposta sera: false


resultado = !resultado && (bool1 || bool2)// mudando o valor da quarta varaial. dizendo que o seu valor é o contrario da quarta variavel(mudada pela segunda vezes) e comparando com  o parametro que possui  a primeira variavel comparando a com a segunda variavel, usando o metedo "ou/||" de comparaçao 
console.log("c. ", resultado)// imprimendo no terminal a quarta varivel. e a resposta sera: true

console.log("d. ", typeof resultado)// imprimindo no terminal o tipo"(typeof)" da quarta variavel. e a resposta sera boolean

