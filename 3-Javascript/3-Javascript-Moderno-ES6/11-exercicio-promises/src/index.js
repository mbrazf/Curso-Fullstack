// Aqui importamos as classes criadas nos outros arquivos
import Spaceship from "./spaceship";
import SpaceshipEngine from "./spaceship_engine";

// Aqui criamos as instâncias de cada nave com seus dados
const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const dwarfStar = new Spaceship("Estrela-Anã", 20, 4)

// Aqui instanciamos a outra classe e passamos a instância anterior como parâmetro
const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const dwarfStarEngine = new SpaceshipEngine(dwarfStar)

// e aqui chamamos o método para dar partida nas naves
sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStarEngine.turnOn()

console.log("Promises")