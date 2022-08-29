// Aqui criamos e exportamos uma classe
export default class{
    constructor(spaceship){
        this.spaceship = spaceship
    }

    // Criamos o método para ligar as naves e fazer a validação da carga da bateria e alterar o valor do escudo
    //  Armazenamos a chamada das promises em variáveis e utilizamos o Promise.all para tentar executar as promises 
    //  Utilizamos o then para pegar o resolve da Promise e exibir uma mensagem,
    //  E também utilizamos o catch para capturar o erro do reject e exibir uma mensagem de erro
    turnOn(){
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.testShield()    

        Promise.all([currentChargeChecking, shieldChecking]).then(results => {
            console.log(results)
            return this.shieldNormalizer(results[1])
        }).then(newShield => {
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga ${currentCharge}%`)
        }).catch(error => {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        })
    }
    


    // Criamos o método que retorna uma Promise nela verificamos a carga atual  se for maior que 30 retorna o resolve com a carga atual e se for menor que 30 retorna o reject com a carga atual.
    checkCurrentCharge(){
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.currentPercentCharge()
            if(currentCharge >= 30){
                resolve(currentCharge)
            } else {
                reject(currentCharge)
            }
        })
    }

    // Função que retorna uma Promise para testar o escudo e dobrar seu valor
    testShield(){
        return new Promise((resolve,reject) => {
            let doubleShield = this.spaceship.shield * 2
            if(doubleShield >= 100){
                resolve(doubleShield)
            } else {
                reject("Escudo em sobrecarga !")
            }
        })
    }

    // Função que retorna uma  Promise que normaliza o escudo da nave
    shieldNormalizer(shield){
        return new Promise((resolve, reject) => {
            let normalizedShield = shield * 0.7
            if(normalizedShield > 120) {
                reject("Escudo em supercarga")
            } else {
                resolve(normalizedShield)
            }
        })
    }
}