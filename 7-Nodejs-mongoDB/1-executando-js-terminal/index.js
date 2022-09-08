// Aqui importamos a biblioteca moment instalada
const moment = require('moment')
// Aqui criamos uma função básica para exibir o próprio nome e o horário atual
function sayMyName(name){
    console.log(name)
    console.log(moment().format('HH:mm'))
}

sayMyName("Marcelo Braz")

// Para executar o código no terminal basta digitar 'node index.js'

// Para utilizar uma biblioteca externa iniciamos o package.json com npm init -y

// Instalamos a biblioteca moment utilizada para formatar datas  'npm install moment --save'

// e basta executar no terminal que a saida sera 'Marcelo Braz 11:16'
