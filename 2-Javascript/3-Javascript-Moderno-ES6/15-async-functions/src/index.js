// Importamos os pacotes instalados
import "core-js"
import "regenerator-runtime/runtime"

// Criamos um objeto com os dados
let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

// Função para ajustar a posição das armas
// Exemplo de async Function, ela envolve o código em uma Promise e o retorno/return da async function retorna no resolve da Promise.
// Ai então o return/resolve é passado como parâmetro coord para a primeira função then abaixo.

//  Também fizemos uma verificação se z é maior que 90, se sim iremos utilizar um método estático Promise.reject() , que retorna o status de rejeitado para a Promise e assim enviando o erro como parâmetro para o catch para ser tratado.
async function adjustPosition(x, y ,z){
    if(z > 90){
        return Promise.reject("Angulo Z inválido para arma")
    }
    laserGun.currentPosition = [x, y, z]
    return([x, y, z])
}

// Função para atirar
// Aqui também o return é passado como o parâmetro coord agora para a segunda função then abaixo.
async function fire(x, y, z){
    laserGun.firing = true
    return([x, y, z])
}

// Aqui a função para mover e atirar e também tratamos o resolve com a função then e o reject com o catch das async functions acima.
function moveAndFire(x, y, z){
    adjustPosition(x, y, z).then(coord => {
        console.log(`Arma ajustada para as coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        return fire(...coord)
    }).then(coord => {
        console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    }).catch(error => {
        console.log(error)
    })
}

// Aqui chamamos a função e passamos os valores dos parâmetro
moveAndFire(20, 40, 10)