// Aqui utilizamos esse método responsável por atualizar o DOM da página, e exibir os elementos na tela
ReactDOM.render(

    //  Aqui criamos um elemento para ser injetado no DOM utilizando o React.createElement
    //  O primeiro item é o elemento desejado no exemplo um h1
    //  O segundo é alguma propriedade como id, classe ou  null se não quiser passar nada
    //  O terceiro item é o conteúdo, texto que será inserido no h1
    React.createElement(
        'h1',
        null,
        'Hello, World'
    ),

    //  E aqui selecionamos a div com o id root onde será inserido os elementos React
    document.getElementById("root")
)