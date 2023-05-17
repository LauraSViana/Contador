
let resultado = 0
function add() {
 resultado++
document.getElementById("result").innerHTML = resultado
 
}
function sub() {
 if (resultado > 0) {
  resultado--
 document.getElementById("result").innerHTML = resultado
 }
 
}
function zera() {
 
  resultado = 0
 document.getElementById("result").innerHTML = resultado
 
 
}