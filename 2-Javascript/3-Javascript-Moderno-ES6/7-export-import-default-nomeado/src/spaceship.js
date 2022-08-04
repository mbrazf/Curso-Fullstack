/* Podemos exportar também diretamente na criação da classe
export default class Spaceship {
    constructor(name, captain, armaments = [], defenses = []){
        this.name = name
        this.captain = captain
        this. armaments = armaments
        this.defenses = defenses
    }
}
*/
//----------------------------------------------------//

// Criamos uma classe
class Spaceship {
    constructor(name, captain, armaments = [], defenses = []){
        this.name = name
        this.captain = captain
        this. armaments = armaments
        this.defenses = defenses
    }
}

// e aqui exportamos a classe Spaceship utilizando o export default
export default Spaceship