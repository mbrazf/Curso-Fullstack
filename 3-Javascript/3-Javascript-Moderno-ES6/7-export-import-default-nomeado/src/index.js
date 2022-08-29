// Aqui importamos a classe exportada em spaceship.js
import Spaceship from "./spaceship";

// e aqui importamos o objeto declarado em armaments.js e armazenamos na variável armamentKind
import armamentKind from "./armaments"

// Aqui importamos os itens que foram exportados de defenses.js, como utilizamos export nomeado temos que importar utilizando o import nomeado, ou seja temos que utilizar o mesmo nome que foi exportado.
// Também não precisamos importar itens que não vamos utilizar
// Podemos também alterar o nome da importação
import  { laserDef as laserD } from "./defenses";


// E aqui importamos de defenses.js o array vazio que foi exportado com o export default
import basicDefenses from "./defenses"

// Aqui criamos uma instância da classe Spaceship, passamos o valor de name e  captain da nave e acessamos a variável armamentKind que contém o objeto com as armas e também acessamos o array laserDefenses que foi importado com as defesas de laser
const spaceship = new Spaceship("Colossus", "Marcelo", armamentKind.laser, laserD)

// e aqui outra instância da classe agora utilizando o basicDefenses importado com o import default
const falcon = new Spaceship("Falcon", "Elon Musk", [], basicDefenses)


console.log(spaceship)
console.log(falcon)