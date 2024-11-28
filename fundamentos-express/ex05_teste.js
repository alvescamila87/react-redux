const express = require('express')
const server = express()
const router = require('./ex05_routes')

// função middleware
server.use('/api', router)

server.listen(3000, () => console.log('Executando...'))