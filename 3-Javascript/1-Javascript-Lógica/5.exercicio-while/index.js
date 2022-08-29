// Aqui declaramos a contagem de dobras em 0 e chosenOption vazio pois irá receber o valor mais abaixo
let warpCount = 0
let chosenOption = " "

// Aqui pegamos o nome da nave e armazenamos na variável
let spaceshipName = prompt("Informe o nome da nave:")

// aqui utilizamos a variável que foi declarada vazia acima e exibimos o menu com as opções 1 e 2
chosenOption = prompt("Deseja entrar em dobra espacial ? \n\n1- Sim\n2- Não")

// aqui iremos realizar o loop, enquanto a opção escolhida for 1- Sim, iremos adicionar 1 dobra na contagem e iremos perguntar novamente, se a opção escolhida continuar sendo 1- Sim, continuaremos adicionando mais 1 dobra na contagem, e se a opção escolhida for a 2- Não, a execução será encerrada.
while(chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra espacial ? \n\n1- Sim\n2- Não")
 }

 // Aqui exibimos um alert com os dados, nome da nave e quantidade de dobras realizadas
alert("Nave: " + spaceshipName + "\nQuantidade de Dobras: " + warpCount)