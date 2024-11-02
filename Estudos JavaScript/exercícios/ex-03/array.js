var option = document.getElementsByName("array")[0]
var lista = document.getElementById("list")
var array = []

function inserir(){


//pega o numero
var num = document.getElementsByName("num")[0].value

//cria o option 
var option = document.createElement("option")
option.text = `o ${num} foi inserido`

//adiciona o option
lista.add(option)

//adiciona o numero no array
array.push(num)

document.getElementsByName("num")[0].value = ""
}// fim do inserir()

function resultado(){
 document.getElementById("resultado").innerHTML = "[" + array + "]"
}