// Criamos um arquivo io.js

// Importamos uma biblioteca do próprio node chamada process, ela pega todos os parâmetro passados para o script assim que ele é executado
const process = require('process');


// Aqui chamamos a process que irá retornar os argumentos passados para o script,
//console.log(process.argv)

//  O process também tem um método para exibir dados no terminal como o console.log o stdout.write
process.stdout.write('Qual o seu nome?')

// e para enviarmos dados utilizamos o método stdin.on que recebe uma função, o primeiro parãmetro é o evento data e o segundo keyboard é a variável onde será armazenado

// e para sair chamamos o process.exit se não o terminal irá continuar esperando algo ser inserido
process.stdin.on('data', (keyboard) => {
    process.stdout.write(keyboard)
    process.exit()
})



// Executamos no terminal node io.js,  irá retornar onde o node está instalado no computador e também irá retornar o caminho onde está o script

// Também podemos passar dados 'node io.js --myName Marcelo' agora o nome também será exibido