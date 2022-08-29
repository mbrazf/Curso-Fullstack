// Aqui importamos a classe Planet de planet.js
import Planet from './planet'

// Aqui importamos a função para conversão
import { convertAUtoKm  } from './planet.operations'


// Aqui criamos um array/lista com as instâncias dos planetas da classe Planet que contém o nome e o valor da AU
let planets = [
    new Planet("Mercúrio" , 0.39),
    new Planet("Vênus" , 0.72),
    new Planet("Terra" , 1),
    new Planet("Marte" , 1.52),
    new Planet("Júpiter" , 5.2),
    new Planet("Saturno" , 9.53),
    new Planet("Urano" , 19.1),
    new Planet("Netuno" , 30),
]

// E aqui percorremos a lista de planetas com o forEach
// e para cada elemento chamamos a função de conversão importada e exibimos no console.log os dados do planeta nome, distância em unidade astronômica e convertida em km
planets.forEach(planet => {
    let distanceFromSun = convertAUtoKm(planet.auToSun).toFixed(2)
    console.log(`${planet.name} - ${planet.auToSun} - ${distanceFromSun}km `)
})