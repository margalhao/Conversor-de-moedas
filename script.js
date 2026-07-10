const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertCurrency() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //valor do input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //valor convertido


    const dollarToday = 5.12
    const euroToday = 5.85

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    switch (currencySelect.value) {
        case "dollar":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dollarToday);
            break;
        case "euro":
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday);
            break;
    }
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-img")

    switch (currencySelect.value) {
        case "dollar":
            currencyName.innerHTML = "Dólar"
            currencyImg.src = "./assets/dollar.png"
            break;
        case "euro":
            currencyName.innerHTML = "Euro"
            currencyImg.src = "./assets/euro.png"
            break;
    }
    convertCurrency()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)
