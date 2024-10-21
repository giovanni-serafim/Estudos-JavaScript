//query selector 

//para selecionar o elemento pelo nameTag basta colocar a nametag após o querySelector
document.querySelector('h1').innerHTML = ("modificado no JS por tagName no querySelector")

// em caso de repetição, use o querySelectorAll e informe a posição no colchete.
document.querySelectorAll('h1')[2].innerHTML = ("modificado no JS por tagName no querySelector")

//para pegar por classe: '.nomeDaClasse'
document.querySelectorAll('.classeExemplo')[1].innerHTML = ("modificado no JS por class no querySelector")

//para pegar por id: '#nomeDoId'
document.querySelectorAll('#idExemplo')[1].innerHTML = ("modificado no JS por ID no querySelector")
