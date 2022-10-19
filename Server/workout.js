const fs = require("fs")
const express = require('express')
const server = express()

server.get("/hi", function(request, response) {
    const hi = fs.readFileSync('./main.txt', "utf-8")
    response.status(200).send(hi)
})

server.get('/rate/:one/:two', function(request, response) {
    const one = Number(request.params.one)
    const two = Number(request.params.two)
    response.status(200).send(`${one + two}`)
})

server.get('/hi/:name', function(request, response) {
    const name = request.params.name
    const phrase = fs.readFileSync('./main.txt', "utf-8")
    response.status(200).send(name + phrase)
})

server.listen(8080)