const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    // const router = express.Router()
    // server.use('/api', router)

    // Rotas de Ciclo de Pagamento 
    // const BillingCycle = require('../api/billingCycle/billingCycleService')
    // BillingCycle.register(router, '/billingCycles')


    //Protected API
    const protectedAPI = express.Router()
    server.use('/api', protectedAPI)

    // aplica filtro de autenticação
    protectedAPI.use(auth)

    //rotas protegidas pelo Token JWT
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedAPI, '/billingCycles')

    //Public APIs
    const openAPI = express.Router()
    server.use('/oapi', openAPI)

    //rotas abertas
    const AuthService = require('../api/user/AuthService')
    openAPI.post('/login', AuthService.login)
    openAPI.post('/signup', AuthService.signup)
    openAPI.post('/validateToken', AuthService.validateToken)



}