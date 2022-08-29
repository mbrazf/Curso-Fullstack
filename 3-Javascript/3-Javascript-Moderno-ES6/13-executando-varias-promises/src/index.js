// Promise para calcular o aumento de velocidade com a taxa de 10%
const increaseVelocity = function(velocityToIncrease){
    return new Promise((resolve, reject) => {
        if(velocityToIncrease <= 0) {
            reject("Frenagem acionada.")
        } else {
            resolve(velocityToIncrease * 0.9)
        }
    })
}

// Promise para calcular o novo consumo de bateria com base na velocidade atual e a velocidade a ser incrementada
const newBateryConsumption = function(currentVelocity, velocityToIncrease) {
    return new Promise((resolve, reject) => {
        let newBateryConsumption = (currentVelocity + velocityToIncrease) / 10000
        if(newBateryConsumption > 0){
            resolve(newBateryConsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}

let velocity = 70

// Aqui armazenamos as Promises em variáveis
let velocityIncreased = increaseVelocity(velocity)
let bateryConsumption = newBateryConsumption(80, velocity)


//  O promise.all recebe um array de promises e retorna uma outra promise
//  Ele irá tentar executar as promises de forma atômica ou seja ou todas elas são resolvidas ou irá retornar o erro
//  O promise.all retorna o resultado das promises também como um array
Promise.all([velocityIncreased, bateryConsumption]).then(results => {
    console.log(results)
}).catch(errors => {
    console.log(errors)
})