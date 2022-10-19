export function getCurrencyValue(body, currency) {
    const currencyIndex = body.indexOf(currency)
    const currencyString = body.slice(currencyIndex)
    const value_start = currencyString.indexOf('<Value>')
    const value_end = currencyString.indexOf('</Value>')
    return currencyString.slice(value_start + 7, value_end)
}

// export {getCurrencyValue}