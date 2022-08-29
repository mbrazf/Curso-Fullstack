// Aqui cirmaos a classe Planet, que contém um contructor que recebe name e surfaceArea como parâmetros
class Planet {
    constructor(name, surfaceArea){
        this.name = name
        this.surfaceArea = surfaceArea
    }

    // Aqui criamos um método
    rotate(){
        console.log("Rotacionando")
    }
}

// Aqui exportamos a classe Planet
module.exports = Planet