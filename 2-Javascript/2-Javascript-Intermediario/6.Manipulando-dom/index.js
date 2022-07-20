// Aqui criamos a função para adicionar novos campos input para telefone
// Selecionamos o elemento form que contém o id phones
function addNewPhone(){
    const phoneForm = document.querySelector("form#phones")

    // Aqui utilizamos children para pegar o elemento filho que está no índice [0] e utilizamos o cloneNode() utilizado para clonar o elemento, ele recebe um parâmetro true para clonar todos os elementos filhos e filhos dos filhos, já o false clona só o primeiro filho
    const newPhone = phoneForm.children[0].cloneNode(true)

    // Aqui alteramos a posição do novo elemento clonado
    const phonePosition = phoneForm.children.length + 1

    // Aqui chamamos a variável que contém o elemento clonado e selecionamos o label dele e alteramos seu texto com a posição
    newPhone.querySelector("label").innerText = "Telefone  " + phonePosition + ": "

    // Aqui adicionamos o novo elemento clonado newPhone dentro do phoneForm ou seja adicionamos o elemento clonado no DOM
    phoneForm.appendChild(newPhone)

    // Aqui exibiremos no console.log o phoneForm com os novos elementos clonados filhos
    console.log(phoneForm.children)

}

// Aqui a função para exibir um alerta com o input e o valor de cada um
// Selecionamos todos os elementos input com o name phone que irá retornar uma lsita/array
// Utilizamos o método forEach nesse array que foi retornado que irá exibir para cada input uma mensagem de alerta com o valor digitado nos inputs
function printPhones(){
    let message = " "
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) =>{
        message += "Telefone " + (index + 1) + ": " + phone.value + "\n"
    })
    alert(message)
}