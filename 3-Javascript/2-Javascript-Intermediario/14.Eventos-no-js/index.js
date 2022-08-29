// Aqui selecionamos o elemento select pelo seu name
// e para adicionar eventos diretamente pelo JS utilizamos o addEventListener() que recebe 2 parâmetros o primeiro é o evento desejado onclick, onmouseover e todos os outros disponíveis e o segundo parâmetro é a função que será executada

document.querySelector("select[name='select-option']").addEventListener("change", function(){
    alert(event.target.value)
})