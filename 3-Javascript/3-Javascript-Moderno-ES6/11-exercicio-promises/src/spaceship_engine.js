// Aqui criamos e exportamos uma classe
export default class{
    constructor(spaceship){
        this.spaceship = spaceship
    }

    // Criamos o método para ligar as naves e fazer a validação da carga da bateria
    // Utilizamos o then para pegar o resolve da Promise e exibir uma mensagem,
    // E também utilizamos o catch para capturar o erro do reject e exibir uma mensagem de erro
    turnOn(){
        this.checkCurrentCharge().then(currentCharge => {
            console.log(`(${this.spaceship.name}) Partida autorizada: carga atual em ${currentCharge}%`)
        }).catch(currentCharge => {
            console.log(`(${this.spaceship.name} Partida não autorizada. Carga em ${currentCharge})%`)
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
}