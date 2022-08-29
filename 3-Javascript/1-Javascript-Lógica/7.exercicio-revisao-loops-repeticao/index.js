// Aqui pegamos o nome da nave
let spaceshipName = prompt("Informe o nome da nave: ")

// Aqui a variável vazia que irá receber o nome da nave invertido abaixo
let invertedName = ""

// aqui utilizamos o for para percorrer a variável spaceshipName ao contrário enquanto o tamanho dela for maior ou igual a 0 e iremos decrementar a cada execução pulando para o próximo caractere 

//  iremos verificar se tem algum caractere "e" na variavel spaceshipName,se houver a execução será encerrada, e se não houver a variável invertedName irá receber os caracteres normais invertidos
for(i = spaceshipName.length - 1; i >= 0; i --){
  if(spaceshipName[i] == "e"){
    break
  } else {
    invertedName += spaceshipName[i] 
  }
}
// aqui se´ra exibido no console.log o nome da nave invertido
console.log(invertedName)

// e aqui será exibidos um alert com o nome antigo da nave e o novo nome após inversão e ocultação
alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)


