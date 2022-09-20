// Aqui importamos o express
const express = require('express')

// Aqui importamos o Router do express em uma variável para poder criar as rotas
const router = express.Router()

// aqui criamos uma rota
// como resposta utilizamos o res.render() que irá apontar para o caminho onde o arquivo está
router.get('/', async(req, res) => {
    res.render('pages/index')
})

// Aqui exportamos a rota criada acima
module.exports = router