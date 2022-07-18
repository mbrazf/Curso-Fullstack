// Aqui criamos a classe BattleSpaceship que herda da classe Spaceship
// utilizamos o método super para acessar e reaproveitar o constructor da classe Spaceship
class BattleSpaceship extends Spaceship{
    constructor(name, crewQuantity, weaponsQuantity){
        super(name, crewQuantity)
        this.weaponsQuantity = weaponsQuantity
    }
}