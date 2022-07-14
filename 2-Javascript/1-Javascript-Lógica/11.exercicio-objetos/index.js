// Aqui o objeto em que irá armazenar os dados da nave
let spaceship = {
  velocity: 0,
  speedUp: function(acceleration) {
    this.velocity += acceleration;
  },
};

// Aqui a função para adicionar os dados da nave no objeto acima
function registerSpaceship() {
  spaceship.name = prompt("Informe o nome da nave");
  spaceship.type = prompt("Informe o tipo da nave");
  spaceship.maxVelocity = prompt("Qual a velocidade máxima da nave (km/s)");
}

//  Aqui a função para acelerar a nave
//  Primeiro pegamos o quanto o usuário quer acelerar e armazenamos na variável acceleration
//  Depois chamamos o método que foi criado no objeto e passamos o valor salvo na variável como parâmetro
//  ai exibimos um menu para selecionar entre acelerar e parar a nave,
// verificamos se a velocidade atual era maior que a velocidade máxima se for exibimos uma mensagem de alerta com a velocidade atual e a máxima da nave
function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity){
      alert("VELOCIDADE MÁXIMA ULTRAPASSADA!" +
            "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
            "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
  }

// Aqui criamos a função para parar a nave
// exibimos um alerta com os dados da nave,
// e definimos a velocidade como 0
function stop(){
    alert("Nome : " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da Nave: " + spaceship.velocity + "km/s" + "\nMáxima da Nave: " + spaceship.maxVelocity + "km/s")
    spaceship.velocity = 0
  }

// Aqui uma função para exibir o menu
// se a opção escolhida for 1 chamamos a função que acelera a nave, e se for 2 iremos chamar a função que para a nave
function showMenu() {
  let chosenOption
  do {
    chosenOption = prompt("O que deseja fazer piloto? \n1-Acelerar \n2-Parar");
    switch (chosenOption) {
      case "1":
        acelerate();
        break;
      case "2":
        stop();
        break;
      default:
        alert("Opção inválida");
    }
  } while (chosenOption != "2");
}

// Aqui chamamos as funções de registro e de exibir o menu
registerSpaceship();
showMenu();
