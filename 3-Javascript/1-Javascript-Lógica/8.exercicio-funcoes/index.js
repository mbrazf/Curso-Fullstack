// Aqui pegamos o nome da nave
let spaceshipName = prompt("Nome da nave: ");

// Definimos a velocidade inicial da nave em 0
let spaceshipVelocity = 0;

// Aqui declaramos essa variável sem valor para utilizarmos abaixo
let chosenOption;

//  Aqui criamos uma função para exibir o menu
//  verificamos se o option é diferente de 1, 2, 3 e 4

function showMenu() {
  let option;
  while (option != "1" && option != "2" && option != "3" && option != "4") {
    option = prompt(
      "O que você deseja fazer ? \n1-Acelerar a nave em 5km/s \n2-Desacelerar em 5km/s \n3-Imprimir dados de bordo \n4-Sair do programa");
  }
  // e retornamos a opção escolhida
  return option;
}

//  Aqui a função para acelerar a nave
function speedUp(spaceshipVelocity) {
  let newVelocity = spaceshipVelocity + 5;
  //  e retornamos o valor após acelerar
  return newVelocity;
}

//  Função para desacelerar a nave
// também verificamos se a newVelocity é menor que 0 ela irá receber o valor 0
function speedDown(spaceshipVelocity) {
  let newVelocity = spaceshipVelocity - 5;
  if (newVelocity < 0) {
    newVelocity = 0;
  }
  //    e retornamos a newVelocity
  return newVelocity;
}

// aqui a função para exibir o alerta com os dados da nave como o nome e a velocidade atual
function printSpaceshipBoardData() {
  alert(
    "Nome da nave: " + spaceshipName + "\nVelocidade atual: " + spaceshipVelocity + "km/s");
}

// aqui executamos a chamada da função que exibe o menu enquanto a opção escolhida for diferente de "4"
do {
  chosenOption = showMenu();
  //  e aqui verificamos qual foi a opção escolhida no menu
  // e para cada opção escolhida será chamada uma função diferente,
  //  case 1 será chamada a função que acelera a nave,
  // case 2 será chamada a função que desacelera a nave,
  // case 3 chama a função que exibe os dados com o nome e a velocidade atual da nave
  // e se nenhuma das opções acima foi escolhida exibiremos um alerta com a mensagem de encerramento do programa
  switch (chosenOption) {
    case "1":
      spaceshipVelocity = speedUp(spaceshipVelocity);
      break;
    case "2":
      spaceshipVelocity = speedDown(spaceshipVelocity);
      break;
    case "3":
      printSpaceshipBoardData(spaceshipName, spaceshipVelocity);
      break;
    default:
      alert("Encerrando o programa de bordo!");
  }
} while (chosenOption != "4");
