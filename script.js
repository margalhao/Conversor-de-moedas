const convertButton = document.querySelector(".convert-button");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //valor convertido
    
    const dollarToday = 5.12

    const convertedValue = inputCurrencyValue / dollarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
        }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
        }).format(convertedValue)

}

convertButton.addEventListener("click", convertCurrency)
