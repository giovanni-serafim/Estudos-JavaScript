var list = [9, 3, 7, 1, 4, 9, 8]

for (var i in list){ // dessa forma o for está criando a variavel i que armazena o indice do array.
    console.log(`o item de posição ${Number(i) + 1} é 0 ${list[i]}`)
}