const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas do ciclo de pagamento
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles')
}