import fs from "fs"
import express from "express"
import {rate_handler} from "./rate_handler.js"
import cors from "cors"

const server = express()

server.use(cors())

server.get("/hello", function(request, response) {
    const main = fs.readFileSync('./main.txt', "utf-8")
    response.status(200).send(main)
})

server.get('/rate/:ticker_1/:ticker_2', rate_handler)

server.get('/watch_list', function(request, response) {
    const popular_currencies = ["USD", "EUR", "GBR", "CHF", "CNY", "NIS", "CAD", "SGD", "JPY", "AUD"]
    response.status(200).send(popular_currencies)
})

server.listen(8080)