const convertButton = document.querySelector(".convert-button");
const currencyInput1 = document.querySelector(".currency-input-1"); //select da moeda de origem
const currencyInput2 = document.querySelector(".currency-input-2"); // select da moeda de destino
const inputCurrencyValue = document.querySelector(".input-currency") //valor digitado no input
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //valor em real
const currencyValueConverted = document.querySelector(".currency-value") //valor convertido
const API_URL = "https://api.exchangerate-api.com/v4/latest/"

async function convertCurrencyAPI() {
    try {
        const response = await fetch(API_URL + currencyInput1.value)
        const data = await response.json()
        const rate = data.rates[currencyInput2.value]
        const convertedValue = (inputCurrencyValue.value * rate)
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencyInput2.value }).format(convertedValue)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: currencyInput1.value }).format(inputCurrencyValue.value)

    } catch (error) {
        alert("Deu ruim")
    }
}
function changeCurrency1() {
    const currencyName1 = document.querySelector("#currency-name-1")
    const currencyImg1 = document.querySelector(".currency-img-1")

    switch (currencyInput1.value) {
        case "USD":
            currencyName1.innerHTML = "Dólar Americano"
            currencyImg1.src = "./assets/dollar.png"
            break;
        case "EUR":
            currencyName1.innerHTML = "Euro"
            currencyImg1.src = "./assets/euro.png"
            break;
        case "GBP":
            currencyName1.innerHTML = "Libra Esterlina"
            currencyImg1.src = "./assets/libra.png"
            break;
        case "JPY":
            currencyName1.innerHTML = "Iene Japonês"
            currencyImg1.src = "./assets/iene.png"
            break;
        case "BRL":
            currencyName1.innerHTML = "Real Brasileiro"
            currencyImg1.src = "./assets/real.png"
            break;
    }
    convertCurrencyAPI()
}

function changeCurrency2() {
    const currencyName2 = document.querySelector("#currency-name-2")
    const currencyImg2 = document.querySelector(".currency-img-2")

    switch (currencyInput2.value) {
        case "USD":
            currencyName2.innerHTML = "Dólar Americano"
            currencyImg2.src = "./assets/dollar.png"
            break;
        case "EUR":
            currencyName2.innerHTML = "Euro"
            currencyImg2.src = "./assets/euro.png"
            break;
        case "GBP":
            currencyName2.innerHTML = "Libra Esterlina"
            currencyImg2.src = "./assets/libra.png"
            break;
        case "JPY":
            currencyName2.innerHTML = "Iene Japonês"
            currencyImg2.src = "./assets/iene.png"
            break;
        case "BRL":
            currencyName2.innerHTML = "Real Brasileiro"
            currencyImg2.src = "./assets/real.png"
            break;
    }
    convertCurrencyAPI()
}

currencyInput1.addEventListener("change", changeCurrency1)
currencyInput2.addEventListener("change", changeCurrency2)
convertButton.addEventListener("click", convertCurrencyAPI)
