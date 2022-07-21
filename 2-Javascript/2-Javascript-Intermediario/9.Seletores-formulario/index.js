// Aqui a função para exibir as informações
function showInfo(){

    // Aqui selecionamos o elemento input pelo seu name e pegamos seu valor com o value
    let name = document.querySelector("input[name ='name']").value

    // Aqui selecionamos o select pelo seu name e selecionamos opção que está marcada e acessamos o texto dela com text
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text

    // Aqui selecionamos o input pelo seu name like-programming e pegamos o value da opção selecionada
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value

    // Aqui selecionamos todos os inputs com o name developer-options e os que foram selecionados
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")

    // Aqui criamos um array vazio e utilizamos o forEach para percorrer cada elemento selecionado e adicionamos no array
    let optionsValue = []
    developerOptions.forEach(element => { optionsValue.push(element.value) })

    // Aqui utilizamos o método join no array optionsValue para adicionar uma vírgula entre os itens do array e criamos a mensagem de alerta para exibir os dados pegos nos inputs
    let optionsChecked = optionsValue.join(", ")
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\nConhecimento em programação web: " + optionsChecked)
}