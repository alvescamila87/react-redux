const server = require('./config/server')
require('./config/database')(server)
require('./config/routes')(server)