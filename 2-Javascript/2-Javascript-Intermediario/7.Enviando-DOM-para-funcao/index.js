// Aqui criamos uma função que recebe element como parâmetro que no caso é o próprio input HTML que foi passado como parâmetro.
// Exibimos um alerta e acessamos o valor do element que vai ser digitado no input
function sayMyFirstName(element){
    alert("Meu primeiro nome é " + element.value)
}

// Aqui a função do segundo input
// Acessamos o evento a partir da palavra event, ele é uma variável global do navegador que armazena o último evento que foi chamado no DOM, e o target armazena de qual elemento o evento foi chamado e o value o valor digitado nesse evento

// Podemos utilizar o event.target em qualquer tipo de evento onclick, onmouseover, onfocus etc.
function sayMyLastName(){
    console.log(event)
    alert("Meu ultimo nome é " + event.target.value)
}