const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCORS = require('./cors')
const queryParser = require('express-query-int') // converter string para valor numérico consulta get

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCORS)
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server