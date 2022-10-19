const USD = document.querySelector(".COIN_1")
const EUR = document.querySelector(".COIN_2")
const GBP = document.querySelector(".COIN_3")
const CHF = document.querySelector(".COIN_4")
const JPY = document.querySelector(".COIN_5")

const text_USD = document.querySelector(".USD")
const text_EUR = document.querySelector(".EUR")
const text_GBP = document.querySelector(".GBP")
const text_CHF = document.querySelector(".CHF")
const text_JPY = document.querySelector(".JPY")


USD.addEventListener("click", function(){
    console.log("I don't remember reaally impotant things.")
    fetch("http://localhost:8080/rate/USD/RUB")
    .then(function(result) {
        return result.text()
    })
    .then(function(result) {
        console.log(result)
        text_USD.innerHTML = `1$ = ${result}₽`
    })
    .catch(function(error) {
        console.log(error)
    })
})

EUR.addEventListener("click", function(){
    console.log("I don't remember reaally impotant things.")
    fetch("http://localhost:8080/rate/EUR/RUB")
    .then(function(result) {
        return result.text()
    })
    .then(function(result) {
        console.log(result)
        text_EUR.innerHTML = `1€ = ${result}₽`
    })
    .catch(function(error) {
        console.log(error)
    })
})

GBP.addEventListener("click", function(){
    console.log("I don't remember reaally impotant things.")
    fetch("http://localhost:8080/rate/GBP/RUB")
    .then(function(result) {
        return result.text()
    })
    .then(function(result) {
        console.log(result)
        text_GBP.innerHTML = `1£ = ${result}₽`
    })
    .catch(function(error) {
        console.log(error)
    })
})

CHF.addEventListener("click", function(){
    console.log("I don't remember reaally impotant things.")
    fetch("http://localhost:8080/rate/CHF/RUB")
    .then(function(result) {
        return result.text()
    })
    .then(function(result) {
        console.log(result)
        text_CHF.innerHTML = `1₣ = ${result}₽`
    })
    .catch(function(error) {
        console.log(error)
    })
})

JPY.addEventListener("click", function(){
    console.log("I don't remember reaally impotant things.")
    fetch("http://localhost:8080/rate/JPY/RUB")
    .then(function(result) {
        return result.text()
    })
    .then(function(result) {
        console.log(result)
        text_JPY.innerHTML = `100¥ = ${result}₽`
    })
    .catch(function(error) {
        console.log(error)
    })
})

