var option = document.getElementsByName("array")[0]
var lista = document.getElementById("list")
var array = []

function inserir(){




//pega o numero
var num = document.getElementsByName("num")[0].value

//se o numero ja estiver na lista
if(array.includes(num)){
    window.alert("numero ja inserido")
    document.getElementsByName("num")[0].value = "" //limpa o campo

}

//se o numero exeder o limite
else if (num < 0 || num > 100){
    window.alert("o numero deve estar entre 0 e 100")
    document.getElementsByName("num")[0].value = ""

}


else{
//cria o option 
var option = document.createElement("option")
option.text = `o ${num} foi inserido`

//adiciona o option
lista.add(option)

//adiciona o numero no array
array.push(num)

document.getElementsByName("num")[0].value = ""
}
}// fim do inserir()

function resultado(){

 if (array.length == 0){
    window.alert("adicione intens antes de finalizar")
    document.getElementsByName("num")[0].value = ""
      }

else{

var maior = Math.max(...array)

var menor = Math.min(...array)

var quantidade = array.length

var soma = array.reduce((x, num)=> x + Number(num), 0 )

var media = soma / quantidade


 document.getElementById("resultado").innerHTML = `quantidade: ${quantidade} <br> maior: ${maior} <br> menor: ${menor} <br> soma: ${soma} <br> média: ${media}`
}
 
}