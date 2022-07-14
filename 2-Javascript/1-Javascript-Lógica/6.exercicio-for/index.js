// Aqui pegamos o nome da nave
let spaceship = prompt("Informe o nome da nave: ")

// Aqui pegamos qual caractere/letra deseja substituir
let caractere = prompt("Qual caractere deseja substituir ?")

// Aqui pegamos a letra que irá entrar no lugar da que foi escolhida acima
let newCaractere = prompt("Por qual caractere quer substituir?")

// Aqui a variável vazia que irá receber abaixo o novo nome da nave
let newSpaceship = ""

//  Aqui percorremos a string enquanto o valor da variável i for menor que o tamanho da string spaceship.
//  Verificamos se o caractere atual é igual ao que desejamos substituir, 
//  se for iremos trocar o caractere atual pelo o newCaractere e iremos armazenar na variável newSpaceship. 
//  e se não for iremos passar para o próximo caractere/letra até chegar ao fim da string e iremos adicionar o caractere normal em newSpaceship.
for(i = 0; i < spaceship.length; i ++){
    if(spaceship[i] == caractere){
        newSpaceship += newCaractere //.toUpperCase()
    } else {
        newSpaceship += spaceship[i]
    }
}

//  aqui o alerta com o novo nome da nave
alert("O novo nome da nave é : " + newSpaceship)

// nave antes de substituir os caracteres
console.log(spaceship)
// caractere que será removido
console.log(caractere)
// o novo caractere que irá substituir
console.log(newCaractere)
// e aqui o novo nome da nave
console.log(newSpaceship)