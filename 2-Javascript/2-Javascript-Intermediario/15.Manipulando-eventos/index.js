function doChange(){
    alert(event.target.value)
}


// Selecionamos o elemento desejado
let sampleInput = document.querySelector("input[name='sample-input']")

// Adicionamos um evento change nesse elemento que chama a função doChange criada acima
sampleInput.addEventListener("change", doChange)

// Instanciamos um objeto Event que recebe como parâmetro o nome do evento a ser criado
let changeEvent = new Event("change")

// Aqui iremos disparar um evento com o dispacthEvent() ele espera receber um objeto Event que contém o evento que iremos disparar no caso a variável changeEvent
sampleInput.dispatchEvent(changeEvent)


// E o removeEventListener() remove o evento de determinada função, passamos o evento e a função como parâmetros para remover
//sampleInput. removeEventListener("change", doChange)
