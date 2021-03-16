const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// não usa mais
// server.use(bodyParser.urlencoded({ extended: true}))
// substituir por 
server.use(express.urlencoded())
server.use(express.json())

server.listen(port, function() {
    console.log(`BACKEND is runnig on port ${port}.`)
})