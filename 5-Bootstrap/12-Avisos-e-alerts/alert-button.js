/*Aqui selecionamos a div com o alert no html e o botão  */
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

/*Função para exibir o alerta */
function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    alertPlaceholder.append(wrapper)
}

/*E aqui se o botão for clicado irá exibir uma mensagem no alert */
if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
        alert('Muito bom programador, você vai ter muito sucesso na carreira!', 'success')
    })
}