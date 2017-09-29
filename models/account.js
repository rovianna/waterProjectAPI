const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = new Schema({
    email: String,
    password: String
})

module.exports = AccountSchema
