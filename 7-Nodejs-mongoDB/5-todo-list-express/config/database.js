// Aqui importamos o mongoose em uma variável
const mongoose = require('mongoose')

// e aqui iniciamos o mongoose utilizando a Promise global do próprio Node
mongoose.Promise = global.Promise

// aqui utilizamos o método connect, passamos a url onde o banco estará e o banco em que utilizaremos, como é uma promise se a conexão for bem sucedida irá exibir um console.log e se der erro irá exibir um erro
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.log(err))

