 // Criar um elemento da lista <li> e o nó de texto
//

/*
 var elemento = document.createElement('li')// criando o elemento
 var texto = document.createTextNode('item da lista adicionado') //criando o nó
 elemento.appendChild(texto)*/
 

 /*
 // recuperando o elemento lista e anexando o elemento <li> ao final da lista
 var lista = document.getElementsByTagName('ul')[0]
 lista.appendChild(elemento)*/



 //insert before
var lista = document.getElementsByTagName("ul")[0]
var itens = lista.getElementsByTagName('li')

//criando elemento
var elemento = document.createElement('li')
elemento.textContent = "outro item "

//inserindo valor em uma posição específica
lista.insertBefore(elemento, itens[4])



