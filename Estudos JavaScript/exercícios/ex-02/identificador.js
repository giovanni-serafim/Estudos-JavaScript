function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementsByName("ano")[0]
    var res = document.getElementsByTagName("div")[0]

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert("ERRO, verifique as informações e tente novamente")
    }
    else{

        var fSex = document.getElementsByName("sexo")
        var idade = ano - fAno.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.height = "200px"
        img.style.width = "200px"
        img.style.borderRadius = "50%"

        if (fSex[0].checked){
            genero = "homem"
            if (idade >=0 && idade< 12){
                //criança
                img.setAttribute('src', 'imgs/menino-criança.jpeg')
            }
            if (idade >=12 && idade< 18){
                //adolescente
                img.setAttribute('src', 'imgs/menino-adole.jpg')
            }
            if (idade >=18 && idade< 50){
                //adulto
                img.setAttribute('src', 'imgs/menino-adulto.jpeg')
            }
            if (idade >=50){
                //idoso
                img.setAttribute('src', 'imgs/menino-velho.jpg')
            }
            
        }
        else if (fSex[1].checked){
            genero = "mulher"
            if (idade >=0 && idade< 12){
                //criança
                img.setAttribute('src', 'imgs/menina-criança.jpeg')
            }
            if (idade >=12 && idade< 18){
                //adolescente
                img.setAttribute('src', 'imgs/menina-adole.jpeg')
            }
            if (idade >=18 && idade< 50){
                //adulto
                img.setAttribute('src', 'imgs/menina-adulta.jpg')
            }
            if (idade >=50){
                //idoso
                img.setAttribute('src', 'imgs/menina-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = "é "+ genero + " com " + idade + " anos <br>"
        res.appendChild(img)
    }
}