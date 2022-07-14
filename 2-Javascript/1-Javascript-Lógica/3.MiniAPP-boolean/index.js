// Aqui utilizamos a biblioteca moment.js para manipular datas
// criamos um arquivo moment.min.js , entre no site do moment.js e copie o código e cole no arquivo moment.min.js e já podemos estar utilizando

// Aqui pegamos a data de partida
let departureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

// Aqui chamamos o moment e passamos a variável acima como a data de partida
let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

// Aqui chamamos o moment() vazio para retornar o dia atual e armazenar na variável today
let today = moment()

// Aqui realizamos o cálculo de diferença de milisegundos entra as datas e armazenamos na variável dateDiff
let dateDiff = today - departureDate

// Aqui pegamos a opção desejada para a conversão 
let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

// Aqui verificamos a opção selecionada e realizamos a conversão
if(chosenOption == "1"){
    // aqui convertemos em segundos e utilizamos o método Math.round que arredonda o valor da divisão
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert("Tempo de vôo : " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2"){
    // aqui convertemos em minutos
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo : " + minutesOfDeparture + " minutos")
} else if(chosenOption == "3"){
    //aqui convertemos em horas
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo : " + hoursOfDeparture + " horas")
} else if(chosenOption == "4"){
    //aqui convertemos em dias
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo : " + daysOfDeparture + " dias")
} else {
    // e aqui se nenhuma opção for escolhida será exibido uma mensagem de alerta
    alert("Opção inválida.")
}






