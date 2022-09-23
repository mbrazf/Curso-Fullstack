
//Aqui criamos a função chamada em show.ejs


// no try declaramos o header da requisição e o tipo de conteúdo sendo json
// declaramos o corpo e transformamos o json em string
// declaramos a response com a url que iremos chamar
// transformamos a resposta em json
// pegamos a task 

// e pegamos o parente da task para alterarmos os estilos

// Abaixo verificamos se a tarefa foi done/concluida se foi adicionamos o atributo checked como true e adicionamos as classe que alteram a cor se ela foi concluida
// e se não foi removemos as classes
const setTagAsDone = async(element, id) => {
    event.preventDefault()
    try {
        let headers = new Headers({ 'Content-Type': 'application/json'})
        let body = JSON.stringify({ task: { done: element.checked }})
        let response = await fetch(`/tasks/${id}?_method=put`, { headers: headers, body: body, method: 'PUT'})
        let data = await response.json()
        let task = data.task
        let parent = element.parentNode

        if(task.done){
            element.checked = true
            parent.classList.add('has-text-success')
            parent.classList.add('is-italic')

        } else {
            element.checked = false
            parent.classList.remove('has-text-success')
            parent.classList.remove('is-italic')
        }
    } catch(error){
        alert('Erro ao atualizar a tarefa')
    }
}