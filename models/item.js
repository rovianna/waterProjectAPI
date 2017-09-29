const mongoose = require('mongoose')
const Water = require('./water')
let Schema = mongoose.Schema

let ItemSchema = new Schema({
    nome: String,
    preco: Number,
    water: {
        type: Schema.Types.ObjectId,
        ref: 'Water',
        required: true
    }
})

module.exports = mongoose.model('Item', ItemSchema)
