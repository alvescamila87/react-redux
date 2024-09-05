//tratamento de erros
const _ = require('lodash')
const nodeRestful = require('node-restful')

// padrão express de handler
module.exports = (req, res, next) => {
    const bundle = res.locals.bundle

    if(bundle.errrors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push())
    return errors    
}