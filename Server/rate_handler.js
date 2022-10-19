import got from "got"
import { getCurrencyValue } from "./get_rate.js"

const new_date = new Date()
const date = new_date.getDate()
const mounth = new_date.getMonth() + 1
const year = new_date.getFullYear()

const link = `https://cbr.ru/scripts/XML_daily.asp?date_req=${date}/${mounth}/${year}`

function rate_handler(request, response) {
    const ticker_1 = request.params.ticker_1
    const ticker_2 = request.params.ticker_2
    got(`${link}`)
    .then(function(result){
        console.log(result)
        return result.body
    })
    .then(function(result){
            const rate = getCurrencyValue(result, ticker_1)
        response.status(200).send(rate)
    })
    .catch(function(error){
        console.log("handler_error")
        console.log(error)
        response.status(500).send("The ship is sinking!")
    })
    // response.status(200).send(ticker_1 + ticker_2)
}

export {rate_handler}