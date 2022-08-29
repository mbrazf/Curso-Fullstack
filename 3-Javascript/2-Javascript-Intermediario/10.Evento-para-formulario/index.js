// Criamos a função save que será executada ao clicar no botão submit
function save(){

    // Aqui utilizamos o event.prevenDefault() que evita o comportamento padrão de recarregar a página para enviar o formulário do evento onsubmit()
    event.preventDefault()

    // Selecionamos o input com o name name e pegamos seu valor
    let name = document.querySelector("input[name='name']").value

    // Aqui selecionamos o select com o name programming-lang e acessamos o valor selecionado com o value
    let programmingLang = document.querySelector("select[name='programming-lang']").value


    // Aqui exibimos um alerta com os dados colocados no input
    alert("Nome: " + name + "\nLinguagem de Programação: " + programmingLang)
}