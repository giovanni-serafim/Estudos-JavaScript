function adicionar(){

    var div = document.getElementsByTagName("div")[0]

    var novaDiv = div.cloneNode(true)

    document.querySelector("section").appendChild(novaDiv);


}