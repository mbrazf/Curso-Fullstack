//  Aqui criamos a classe App que irá conter toda a aplicação
class App {
    // Criamos um método addProperty()
    // removemos o comportamento padrão do botão submit
    // selecionamos os elementos e criamos uma instância da classe Property do outro arquivo
    // chamamos o método addOnPropertiesList e passamos o objeto/instância como parâmetro
    // e chamamos o método que limpa os campos do formulário
    addProperty (){
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented'] ").checked
        let property = new Property(kind, area, rented)

        this.addOnPropertiesList(property)
        this.cleanForm()
    }

    // Aqui criamos outro método que recebe a instância/objeto criado acima
        addOnPropertiesList(property){
        // Aqui criamos um elemento li e criamos o texto com os dados pegos nos inputs
        // Verificamos se a property.rented está marcada, se estiver chamamos o método que exibe a marca de ALUGADO se não estiver iremos chamar o método da marca DISPONÍVEL
        // e inserimos a rentedMark como filho da li
        let listElement = document.createElement("li")
        let propertyInfo = "Tipo: " + property.kind + " (Área: " + property.area + "m²)"
        if(property.rented){
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        } else {
            let availableMark = this.createAvailableMark()
            listElement.appendChild(availableMark)
        }

        // Aqui atualizamos o texto da li com o texto com os dados do imóvel
        // chamamos o método que cria o botão de remover
        // e inserimos o botão como filho da li
        listElement.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)

        // e aqui selecionamos a ul e inserimos a li como filho
        document.getElementById("properties").appendChild(listElement)
    }

    //  Aqui o método para criar a marca de alugado
    //  Criamos um elemento span
    //  alteramos seus estilos e retornamos ele
    createRentedMark(){
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO!"
        return rentedMark
    }

    //  Aqui o método para criar a marca de disponível
    //  Criamos um elemento span
    //  alteramos seus estilos e retornamos ele
    createAvailableMark(){
        let availableMark = document.createElement("span")
        availableMark.style.color = "white"
        availableMark.style.backgroundColor = "green"
        availableMark.innerText = "DISPONÍVEL!"
        return availableMark
    }

    // Aqui criamos o método para criar o botão para remover
    // setamos seu atributo com o evento onclick que chama o método remove()
    // alteramos o texto que será exibido no botão
    // e retornamos o botão criado
    createRemoveButton(){
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    //  Aqui criamos o método para limpar o formulário
    //  e definimos os valores como vazio
    cleanForm(){
        document.querySelector("input[name='area']").value = " "
        document.querySelector("input[name='rented']").checked = false
    }

    // Aqui o método para remover os itens da lista
    // Armazenamos em uma variável o event do botão e pegamos o parentNode que é o elemento pai
    // Selecionamos o elemento com o id properties que é a UL e utilizamos o removeChild(liToRemove) para remover o elemento filho LI
    remove(){
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }
}




