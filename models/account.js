const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
    email: String,
    password: String
})

module.exports = accountSchema
