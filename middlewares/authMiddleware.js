const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const fs = require('fs')
const env = require('node-env-file')
const envFile = __dirname + '/.env'

if (fs.existsSync(envFile)) env(envFile)

const TOKENTIME = 60*60*24*30
const SECRET = 'waterapilocationauthenticationawesome'

let authenticate = expressJwt({ secret : SECRET})
let generateAccessToken = (req, res, next) => {
    req.token = req.token || {}
    req.token = jwt.sign({
        id: req.user.id,
    }, SECRET, {
        expiresIn: TOKENTIME
    })
    next()
}

let respond = (req, res) => {
    res.status(200).json({
        user: req.user.username,
        token: req.token
    })
}

module.exports = {
    authenticate,
    generateAccessToken,
    respond
}
