// Aqui criamos o objeto que contém os dados da nave
let komodoShip = {
    name: "Komodo",
    velocity: 80,
    acceleration: 0
}

// Criamos uma função que irá retornar a promise, e que recebe como parâmetros velocity e acceleration, podemos utilizar eles dentro da promise.

//  Criamos uma promise que recebe uma função como parâmetro que será executada de forma assíncrona que recebe 2 parâmetros:
// -  resolve é uma função que será chamada quando a gente quiser que a promise seja encerrada com sucesso, faz com que a promise receba o status de realizada,
// - reject  é usado quando a gente quer que a promise seja encerrada com falha, faz com que a promise receba o status de rejeitada.

// Criamos um setTimeout para ser executado após 1 segundo, e dentro dele verificamos a acceleration da nave, se a verificação for verdadeira chamamos o resolve() que pode receber parâmetro nesse caso recebe a velocidade atualizada.
// e se for falsa chamamos o reject() que também pode receber parâmetro, com uma mensagem de erro.

const velocityAfter2Seconds = (velocity, acceleration) => {

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            
            if(acceleration > 0){
                velocity += acceleration * 2
                console.log(`Nova velocidade: ${velocity}`)
                resolve(velocity)
            } else {
                console.log(`Aceleração inválida`)
                reject("Não possui aceleração")
            }
        }, 1000);
    })
}

// Aqui chamamos a função que retorna a promise e passamos os valores dos parâmetros velocity e acceleration.

//  Para utilizar o método then precisamos utilizar o return na Promise,
// O then é utilizado para acessar/tratar/alterar o que foi passado no resolve.
// Agora utilizamos o método .then() na chamada da Promise, que também recebe uma função e que recebe como parâmetro o valor passado no resolve no exemplo a velocity, agora quando a promise for chamada o método then irá alterar a velocidade da nave e exibirá no console.log.

//  E também temos o método catch que é utilizado para capturar e tratar erros caso a Promise seja reject/rejeitada,
//  Ele também recebe uma função que recebe como parâmetro o que foi passado no reject, nesse exemplo o parâmetro message recebe a mensagem de erro "Não possui aceleração" que foi passada no reject.
velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
    komodoShip.velocity = velocity
    console.log("Depois de acelerar:\n", komodoShip)
}).catch(message => {
    console.log(`Komodo: ${message}`)
})

// Então o  console.log será executado Assincronamente ou seja ele será executado antes de tudo, e a promise será executada depois de 1 segundo com o setTimeOut()
console.log("Execução de Promises")

console.log(komodoShip)
