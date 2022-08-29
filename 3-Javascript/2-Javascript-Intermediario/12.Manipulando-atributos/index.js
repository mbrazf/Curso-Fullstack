
// Função para ativar desativar o input
function verifyEnablement(){

    // Primeiro selecionamos o select e acessamos seu valor
    // Depois verificamos se o valor do select é igual a disabled, se for iremos selecionar o parágrafo abaixo do input e iremos alterar seu atributo disabled para true desativando o input e alteramos a mensagem que será exibida e as cores
    let selectedValue = document.querySelector("select").value
    if(selectedValue == "disabled"){
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "red"
    } else {

        // E aqui a mesma coisa selecionamos o input e alteramos seu atributo disabled para false, e alteramos os estilos caso o input esteja habilitado
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = "HABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "green"
    }
}

