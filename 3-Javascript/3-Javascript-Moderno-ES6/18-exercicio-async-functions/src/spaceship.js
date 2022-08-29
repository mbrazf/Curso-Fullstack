// Aqui criamos e exportamos diretamente a classe Spaceship com os dados da nave
export default class Spaceship {
    constructor(name, maxCapacity, currentCharge, shield){
        this.name = name
        this.maxCapacity = maxCapacity
        this.currentCharge = currentCharge
        this.shield = shield
    }

    // Aqui criamos o método para calcular a porcentagem da carga atual
    currentPercentCharge(){
        return this.currentCharge * 100 / this.maxCapacity
    }
}