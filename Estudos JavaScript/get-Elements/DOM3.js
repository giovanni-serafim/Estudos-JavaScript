//getElementById, getElementsByName, getElementsByClassName, getElementsByTagName.

// vai pegar apenas o primeiro elemento com essa id, innerHTML é para modificar o conteúdo pegado pelogetElement.
document.getElementById('idCustomizada').innerHTML = '<b> conteúdo modificado no JS por ID</b>'


document.getElementsByName('nomeDiv')[0].innerHTML = "div por nome no JS"
//bem parecido com o getelementsbyid, porem ele armaxena os items com esse nome em um vetor .
//então vc informa no colchete a posição do vetor que vc quer modificar, no caso estou modificando o primeiro elemento do vetor.

//o GETELEMENTSBYCLASSNAME funciona da mesma forma. pelo nome da classe.
//O GETELEMENTSBYTAGNAME funciona da mesma forma. pelo nome da tag, por exemplo "h1"[0].


//alterando os dados sequencialmente com setTimeout:
setTimeout( function(){
    var div2 = document.getElementsByName('nomeDiv')[1] //adicionando a 2° div na variavel div2
    div2.style.backgroundColor = "yellow" //mudando o fundo com a variavel
    document.getElementsByName('nomeDiv')[1].innerHTML = "alterado por nome no JS"
}, 2000 )

setTimeout( function(){
    var div3 = document.getElementsByName('nomeDiv')[2]
    div3.style.backgroundColor = "orange"
    document.getElementsByName('nomeDiv')[2].innerHTML = "alterado por nome no JS"
}, 3000 )

setTimeout( function(){
    var div4 = document.getElementsByName('nomeDiv')[3]
    div4.style.backgroundColor = "red"
    document.getElementsByName('nomeDiv')[3].innerHTML = "alterado por nome no JS"
}, 4000 )

