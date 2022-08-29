// Importamos os pacotes baixados
import "core-js"
import "regenerator-runtime/runtime"

// Aqui criamos e exportamos uma classe
export default class{
    constructor(spaceship){
        this.spaceship = spaceship
    }

    // Criamos o método para ligar as naves e fazer a validação da carga da bateria e alterar o valor do escudo
    //  Armazenamos a chamada das promises em variáveis e utilizamos o Promise.all para tentar executar as promises 
    //  Utilizamos o then para pegar o resolve da Promise e exibir uma mensagem,
    //  E também utilizamos o catch para capturar o erro do reject e exibir uma mensagem de erro
    async turnOn(){
        try{
            let currentChargeChecking = this.checkCurrentCharge()
            let shieldChecking = this.testShield()    
            let results = await Promise.all([currentChargeChecking, shieldChecking])
            this.spaceship.shield = await  this.shieldNormalizer(results[1])
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga ${this.spaceship.currentCharge}%`)
        } catch(error) {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        }
    }
    
    // Criamos o método que retorna uma Promise nela verificamos a carga atual  se for maior que 30 retorna o resolve com a carga atual e se for menor que 30 retorna o reject com a carga atual.
    async checkCurrentCharge(){
        let currentCharge = this.spaceship.currentPercentCharge()
        if(currentCharge < 30){
            return Promise.reject(`Carga em apenas ${currentCharge}GJ`)
        } 
        return currentCharge
    }

    // Função que retorna uma Promise para testar o escudo e dobrar seu valor
    async testShield(){
        let doubleShield = this.spaceship.shield * 2
        if(doubleShield < 100){
            return Promise.reject(`Escudo em sobrecarga!`)
        } 
        return doubleShield
    }

    // Função que retorna uma  Promise que normaliza o escudo da nave
    async shieldNormalizer(shield){
            let normalizedShield = shield * 0.7
            if(normalizedShield > 120) {
                return Promise.reject("Escudo em supercarga")
            } 
            return normalizedShield 
    }
}