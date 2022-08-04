//- setTimeout é uma função que recebe uma arrow function como parâmetro, dentro dela a ação que será executada, e no fim passamos o tempo que será executada em milisegundos, no exemplo 2000 milisegundos são 2 segundos.
// setTimeout é executado apenas uma vez
let timeoutId = setTimeout(() => {
    console.log("Executando após 2 segundos")
}, 2000);

// e aqui uma função que cancela a execução do setTimeout, para utilizar ela precisamos armazenar em uma variável o setTimeout, e passamos essa variável para o clearTimeout
clearTimeout(timeoutId)


// - setInterval, sua sintaxe é a mesma do setTimeOut, ela irá executar o código em intervalos de tempo

let intervalId = setInterval(() => {
    console.log("Executando a cada 2 segundos !") 
}, 2000);


// e aqui uma função que interrompe a execução do setInterval, para utilizar ela precisamos armazenar em uma variável o setInterval, e passamos essa variável para o clearInterval
clearInterval(intervalId)

/* Exemplo

//  declaramos uma variável para armazenar os segundos
//  a cada execução somaremos 2 em seconds
//  e ao chegar em 10 iremos parar a execução do setInterval

let seconds = 0
let intervalId = setInterval(() => {
    seconds += 2
    console.log(`Executando após ${seconds} segundos !`) 
    if(seconds == 10){
        clearInterval(intervalId)
    }
}, 2000);
*/
