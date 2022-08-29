// Aqui um objeto com os dados da nave
const spaceship = {
    name: "Rontaro",
    currentBateryCharge: 50,
    consumptionPerKms: 0.00008
}

// Aqui uma função que retorna uma Promise utilizada para atualizar a  carga da bateria com base na carga consumida
const updateBateryCharge = function(chargeConsumed){
    return new Promise((resolve, reject) => {
        spaceship.currentBateryCharge -= chargeConsumed
        if(spaceship.currentBateryCharge > 0) {
            resolve(spaceship.currentBateryCharge)
        } else {
            reject("Bateria esgotada! Nave será desativada em alguns segundos.")
        }
    })
}

// E aqui outra função que retorna uma Promise para calcular o consumo da bateria da nave
const calculateBateryConsumption = function(velocity, seconds) {
    return new Promise((resolve, reject) => {
        if(spaceship.consumptionPerKms <= 0 || velocity <= 0){
            reject("Nave está parada !.")
        } else {
            let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
            resolve(chargeConsumed)
        }
    })
}

// Aqui chamamos a Promise calculateBateryConsumption com os valores do parâmetro velocity e seconds
// Utilizamos o then que retorna uma promise para pegar o resultado da promise e retorna a chamada da outra promise updateBateryCharge
// pegamos o resultado da promise com o then e exibimos a mensagem com a nova carga no console.log
// e pegamos também a mensagem de erro do reject da promise e exibimos no console.log
// Portanto se em alguma das promises acima ocorrer algum erro ele será capturado pelo mesmo catch
calculateBateryConsumption(90, 300).then(chargeConsumed => {
    return  updateBateryCharge(chargeConsumed)
}).then(newCharge => {
        console.log(`Carga atual: ${newCharge}`)
}).catch(error => {
    console.log(error)
})