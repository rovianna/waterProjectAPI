const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fs = require('fs')
const env = require('node-env-file')
const envFile = __dirname + '/.env'

if (fs.existsSync(envFile)) env(envFile)

app.set('PORT', process.env.PORT)
app.set('MONGO_CONNECTION', process.env.MONGO_CONNECTION)
//Mongoose Connection
mongoose.connect(app.get('MONGO_CONNECTION'), {
    useMongoClient: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(app.get('PORT'), () => {
    console.log(`Servidor rodando na porta ${app.get('PORT')}`)
})
