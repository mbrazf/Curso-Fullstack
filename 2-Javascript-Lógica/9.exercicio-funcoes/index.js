// Aqui declaramos a função que irá desacelerar a nave, recebe 2 parâmetros velocity e uma função printer
// declaramos a taxa de desaceleração e verificamos enquanto a velocidade for maior que 0, iremos chamar a função printer e decrementar a deceleration da velocity
function slowDown(velocity, printer){
    let deceleration = 20
    while(velocity > 0){
      printer(velocity)
      velocity -= deceleration
    }
    // Exibimos um alerta
    alert("Nave parada, As comportas podem ser abertas")
  }
  
  // Aqui declaramos a velocidade da nave
  let spaceshipVelocity = 150
  
  // e aqui chamamos a função slowDown e passamos spaceshipVelocity como o valor do parâmetro velocity e passamos outra função como parãmetro que recebe velocity como parãmetro e que exibe um console.log com a velocidade atual
  slowDown(spaceshipVelocity, function(velocity){
    console.log("Velocidade atual: " + velocity)
  })