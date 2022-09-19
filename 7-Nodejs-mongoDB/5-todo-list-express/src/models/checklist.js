// Para poder utilizar o mongo importamos o mongoose
const mongoose = require('mongoose')

// Aqui criamos um Schema, ele é o modelo que será utilizado no documento do banco de dados, e criamos um campo name do tipo String e obrigatório, sempre que formos criar uma collection ela terá que ter esse campo name

// e também criamos um campo tasks, nele referenciamos o checklist com as tasks pelo Id
const checklistSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

// Aqui exportamos o módulo, utilizamos o mongoose.model nele passamos o nome que desejamos e o Schema criado
module.exports = mongoose.model('Checklist', checklistSchema)