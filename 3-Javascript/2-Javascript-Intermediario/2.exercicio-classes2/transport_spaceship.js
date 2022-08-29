// Aqui criamos a classe TransportSpaceship que herda da classe Spaceship
// utilizamos o método super para acessar e reaproveitar o constructor da classe Spaceship
class TransportSpaceship extends Spaceship{
    constructor(name, crewQuantity, sitsQuantity){
        super(name, crewQuantity)
        this.sitsQuantity = sitsQuantity
    }
}