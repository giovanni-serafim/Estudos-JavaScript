//hasAttribute - confere se tem algum atributo

document.write('hasAttribute: <br>' + document.getElementById("idQualquer").hasAttribute('class'))
//o document.write é apenas pra mostrar o resultado no site
//nesse caso, o hasAttribute está conferindo se o elemento com o idQualquer tem algum atributo class.
//ele retornará true ou false.




document.write('<br>' + document.querySelector('.classeQualquer').hasAttribute('id'))
//aqui  ele pergunta se o elemento com classeQualquer tem algum id.


//gerAttribute - pega o valor
//se eu faço (class = "classeQualquer"), o atributo "class" recebe o valor "classeQualquer"
var atributo = document.getElementById('idQualquer')//pega todo o elemento com esse ID

document.write('<br><br>getAttribute: <br>' + atributo.getAttribute('class'))//escreve o valor de class do elemento com aquela ID



//setAttribute - altera ou aplica um atributo
var atributo2 = document.getElementById('idQualquer')

atributo2.setAttribute('style', 'background-color: blue')//pega o elemento com aquela div e aplica o atributo 'style'
