/* MODELO 1: EXEMPLO SIMPLES
var a = 5
var b = 7
var c = a+b
console.log(c)
FIM DO MODELO 1*/

/* MODELO 2: FUNÇÕES
var a = 3
var b = 4
function somar (x,y){
    var c = x+y
    return c
}

console.log(somar(a,b))
FIM DO MODELO 2*/

/* MODELO 3: TIPOS DE VARIAVEIS
var a = 7
let b = 5
const d = 0

function somar (x,y) {

    let c = x+y
    return c
}
*/

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const v1 = Number(document.getElementById("num1").value)
    const v2 = Number(document.getElementById("num2").value)

    const soma = v1+v2


    document.getElementById("resultado").textContent=soma

})