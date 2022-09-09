// Aqui utilizamos uma biblioteca do próprio Node
const http = require('http')

// Aqui criamos uma variável server e nela utilizamos o método createSercer() recebe 2 parâmetros, req que é as informações da requisição passadas pelo browser e res é o que estamos respondendo que será devolvido para o usuário

// nele utilizamos 2 consoles.log um no req.method para exibir o método que está sendo executado, e req.url para ver a url

// também passamos como resposta para o usuário o statusCode como 200, mostrando que a requisição foi um sucesso
// e também utilizamos o método end para enviar uma resposta como uma mensagem ou elemento html para o usuário
const server = http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 200
    res.end('<h1>Request foi um sucesso!</h1>')
})

// aqui utilizamos o listen na variável que contem o servidor, o listen irá monitorar tudo o que ocorrer ou for chamado no browser na porta 3000 irá cair nesse servidor, o listen também recebe uma função
server.listen(3000, () => {
    console.log('Servidor Ativo!')
})

// Ai só executar 'node server.js' que o servidor será  ativado, e acessar localhost:3000 para ver a resposta do servidor


