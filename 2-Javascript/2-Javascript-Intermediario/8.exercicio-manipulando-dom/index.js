// Aqui criamos a função para adicionar a casa na lista
function addHouse(){
    let numero = document.getElementById("numero").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let area = document.getElementById("area").value

    // Aqui criamos um elemento li
    // e passamos o texto da casa com os dados pegos nos inputs
    let lista = document.createElement("li")
    lista.innerText = area + "m²,  número " + numero + " (" + bairro + " - " + cidade + ")" 

    // Aqui criamos um botão para remover
    // setamos o tipo dele como "button" com o type
    // setamos seu texto como "Remover" com o innerText
    // e utilizamos o setAttribute para setar o atributo onclick que irá chamar a função de remover as casas e passamos o próprio elemento como parâmetro da função
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick" , "removeHouse(this)")
    
    // Aqui inserimos o removeButton como filho do li
    lista.appendChild(removeButton)

    // Aqui selecionamos a ul pelo id e inserimos a lista com o li criada, como filho da ul
    document.getElementById("house-list").appendChild(lista)
}

//  Aqui criamos a função para remover as casas, ela recebe o elemento removeButton como parâmetro
// Pegamos o elemento LI pai do button que recebemos como parâmetro com o parentNode
// e selecionamos a UL pelo seu id e utilizamos o removeChild(removeList) e passamos a variável que pega o elemento pai do button como parâmetro para ser removido 
function removeHouse(button){
    let removeList = button.parentNode
    document.getElementById("house-list").removeChild(removeList)
}