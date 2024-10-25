function carregar(){
   var msg = document.getElementById("msg")
   var img = document.getElementById("img")
   var titulo = document.getElementsByTagName("h1")[0]
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML =` agora são ${hora} horas.`

    if (hora >= 6 && hora <=12){
        img.src = "imgs/manhã.jpg"
        titulo.innerHTML = ("bom dia!")
        document.body.style.backgroundColor = "rgb(89, 140, 234)"  
    }
    else if (hora > 12 && hora <18){
        img.src = "imgs/tarde.jpg"
        titulo.innerHTML = ("boa tarde!")
        document.body.style.backgroundColor = "darkorange"
    }
    else{
        img.src = "imgs/noite.jpg"
        titulo.innerHTML = ("boa noite!")
        document.body.style.backgroundColor = "darkblue"
    }


}
