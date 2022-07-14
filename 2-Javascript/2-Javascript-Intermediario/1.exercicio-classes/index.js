
// Criamos a classe SpacialStation que recebe 2 parâmetros name e crewQuantity
class Spaceship{
    constructor(name, crewQuantity){
      this.name = name
      this.crewQuantity = crewQuantity
      this.hitched = false
      this.doorOpen = false
    }
    // aqui criamos um método para engatar as naves
    hitch(){
      let hitched = true
      let doorOpen = true
    }
  }
  
  // Aqui a função para exibir o menu de escolha
  function showMenu(){
    let chosenOption
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3"){
    chosenOption = prompt("Qual ação deseja realizar? \n1-Realizar engate \n2-Imprimir naves \n3-Sair do programa")
    } 
    return chosenOption
  }
  
  // Aqui a função para adicionar as naves e criar uma instância/objeto da classe
  function createSpaceship(){
    let spaceshipName = prompt("Nome da nave:")
    let crewQuantity = prompt("Número de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
  }
  
  // Aqui a função para exibir um alerta com todas as naves na estação espacial
  function printSpaceshipList(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
       spaceshipList += (index + 1) + "- " + spaceship.name + " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
  }
  // Aqui criamos um array vazio que iremos adicionar as naves engatadas abaixo
  let hitchedSpaceships = []
  
  // Aqui declaramos uma variável vazia para armazenar a opção escolhida no menu
  // verificamos a opção escolhida se for "1" chamamos a função para adicionar naves, chamamos o método hitch para engatar as naves, e adicionamos a nave engatada no array vazio que foi criado acima.
  
  // Se for "2" chamamos a função que imprime as informações das naves engatadas
  let chosenOption
  while(chosenOption != "3"){
    chosenOption = showMenu()
    switch(chosenOption){
      case "1":
        let spaceshipToAdd = createSpaceship()
        spaceshipToAdd.hitch()
        hitchedSpaceships.push(spaceshipToAdd)
        break
        
      case "2":
        printSpaceshipList(hitchedSpaceships)
        break
    }
  }
    