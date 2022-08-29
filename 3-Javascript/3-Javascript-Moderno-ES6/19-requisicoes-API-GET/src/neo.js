// Aqui criamos e exportamos diretamente uma classe com os dados do Neo
export default class Neo{
    constructor(id, name, averageEstimatedDiameter, isSentry){
        this.id = id
        this.name = name
        this.averageEstimatedDiameter = averageEstimatedDiameter
        this.isSentry = isSentry
    }
}