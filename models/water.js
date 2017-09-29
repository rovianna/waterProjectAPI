const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Item = require('./item')

const WaterSchema = new Schema({
    name: String,
    description: String,
    locale: {
        type: { type: String, default: 'Point'},
        coordinates: {
            'lat': Number,
            'long': Number
        }
    },
    items: [{type: Schema.Types.ObjectId, ref:'Item'}]
})

module.exports = WaterSchema
