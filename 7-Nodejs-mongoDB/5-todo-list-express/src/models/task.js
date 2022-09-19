// Para poder utilizar o mongo importamos o mongoose
const mongoose = require('mongoose')

// Aqui criamos um Schema, ele é o modelo que será utilizado no documento do banco de dados, e criamos um campo name do tipo String e obrigatório, sempre que formos criar uma collection ela terá que ter esse campo name, também criamos um campo done para verificar se a tarefa foi concluída por padrão ele será criado como false

// e também criamos um campo checklist para referenciar as tasks com o checklist, nele utilizamos como type o mongoose.Schema.Types.ObjectId para referenciar pelo id de Checklist e ele é obrigatório ou seja só haverá uma task se houver um checklist
const taskSchema = mongoose.Schema({ 
    name: {type: String, required: true},
    done: {type: Boolean, default: false},
    checklist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
})

// Aqui exportamos o módulo, utilizamos o mongoose.model nele passamos o nome que desejamos e o Schema criado
module.exports = mongoose.model('Task', taskSchema);