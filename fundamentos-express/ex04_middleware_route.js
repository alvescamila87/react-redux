const express = require('express')
const server = express()

server.route("/clientes") 
    .get((req, res) => res.send("Lista de clientes"))
    .post((req, res) => res.send("Novo cliente"))
    .put((req, res) => res.send("Altera cliente"))
    .delete((req, res) => res.send("Remove cliente"))

server.listen(3000, () => console.log("Executando..."))