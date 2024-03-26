const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.2
const euro = 5.9
const mbitcoin = 358.852

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal)

if(select.value === "US$ Dólar americano") {
  currencyValueText.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReal / dolar)
} 
if(select.value === "€ Euro") {
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
          { style: 'currency', currency: 'EUR' }
      ).format(inputReal / euro)
  } 

if(select.value === "₿ Bitcoin") {
    currencyValueText.innerHTML = new Intl.NumberFormat('bi-BI',
          { style: 'currency', currency: 'bitcoin' }
      ).format(inputReal / mbitcoin)
  } 
    
}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(select.value === 'US$ Dólar americano')
    currencyName.innerHTML = 'Dólar americano'
    currencyImg.src ="./asset/estados-unidos (1) 1.png"

    if(select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./asset/euro.png"
    }
    
    if(select.value === '₿ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./asset/bitcoin.png"
    }
    
    convertValues()
}
button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)