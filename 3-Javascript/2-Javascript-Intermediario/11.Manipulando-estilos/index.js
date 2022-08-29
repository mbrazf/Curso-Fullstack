

// Função para alterar a cor do fundo do texto
// Selecionamos o elemento desejado e alteramos sua cor de fundo com a propriedade style.backgroundColor = "blue"
function setBlueBackground(){
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

// Aqui uma forma mais direta de alterar os estilos
// Função para alterar a cor do fundo do texto
// Selecionamos o elemento desejado e alteramos sua cor de fundo com a propriedade style.backgroundColor = "transparent"
function setTransparentBackground(){
    document.getElementById("style-text").style.backgroundColor = "transparent"
}

// Função para alterar a cor do texto
// Selecionamos o elemento desejado e adicionamos uma classe com o classList.add(" ")
// nessa classe definimos a cor de texto como red
function setRedColor(){
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

// Função para remover a cor aplicada no texto
// Selecionamos o elemento desejado e removemos a classe que foi adicionada com o classList.remove(" ")
function removeRedColor(){
    let element = document.getElementById("style-text")
    element.classList.remove("red-color")
}