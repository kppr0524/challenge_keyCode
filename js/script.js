//Variables globales
const botonA1 = document.getElementById("a1")
const botonB2 = document.getElementById("b2")
const botonC3 = document.getElementById("c3")
const botonD4 = document.getElementById("d4")
const botonE5 = document.getElementById("e5")
const botonF6 = document.getElementById("f6")
const botonG7 = document.getElementById("g7")
const botonH8 = document.getElementById("h8")
const botonI9 = document.getElementById("i9")
const botonCl = document.getElementById("cl")
const botonJ0 = document.getElementById("j0")
const botonCn = document.getElementById("cn")

////////////////////////////////
let letras = document.getElementsById("letras")
let numero = document.getElementById("numeros")
//guardar variables
let letrasG = ""
let numeroG = ""




//eventos oneclic
botonA1.onclick = function(){
    guardarA1()
}
botonB2.onclick = function(){
    guardarB2()
}
botonC3.onclick = function(){
    guardarC3()
}
botonD4.onclick = function(){
    guardarD4()
}
botonE5.onclick = function(){
    guardarE5()
}
botonF6.onclick = function(){
    guardarF6()
}
botonG7.onclick = function(){
    guardarG7()
}
botonH8.onclick = function(){
    guardarH8()
}
botonI9.onclick = function(){
    guardarI9()
}
botonJ0.onclick = function(){
    guardarJ0()
}