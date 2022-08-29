// Aqui declaramos uma variável que recebe require(), ele recebe um parâmetro que é o caminho do arquivo desejado, ele irá procurar se tem algum módulo sendo exportado, no exemplo a classe Planet
const Planet = require("./planet")

// Aqui importamos o módulo/objeto exportado do arquivo solar_system
const solarSystem = require("./solar_system")

// Podemos também importar bibliotecas e pacotes, passamos o nome dele diretamente como parâmetro do require, porque o require considera o node_modules como um caminho padrão
const moment = require('moment')


// Aqui utilizamos a classe e criamos uma instância/objeto dela
const earth = new Planet("Terra", 50100000)
// Aqui chamamos o método que contém na classe Planet
earth.rotate()
// Aqui adicionamos a instância da classe no objeto importado de solar_system
solarSystem.planets.push(earth)

// Aqui criamos novas instâncias da classe Planet e adicionamos no objeto importado de solar_system.js
solarSystem.planets.push( new Planet("Saturno" , 100000000))
solarSystem.planets.push( new Planet("Marte" , 256200))
solarSystem.planets.push( new Planet("Júpiter" , 11111256200))

console.log(solarSystem)

// Aqui utilizamos o moment para exibir a hora atual
console.log(moment().format("HH:mm"))