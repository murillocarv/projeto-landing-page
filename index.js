var Leonardo = window.document.getElementById("leo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var setaD = window.document.getElementById("setadir");
var setaE = window.document.getElementById("setaesq")


function RolarParaDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaD.style = "visibility: hidden"
    setaE.style = "visibility: visible; margin-top: 55px"

}

function RolarParaEsquerda(){
    Bruna.style = "display: none"
    Leonardo.style = "display: flex"
    setaD.style = "visibility: visible"
    setaE.style = "visibility: hidden"
}