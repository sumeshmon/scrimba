import { getStockData } from './fakeStockAPI.js'
let lastPrice = null;
function renderStockTicker(stockData) {
  
    const stockDisplayName = document.getElementById('name')
    const stockDisplaySymbol = document.getElementById('symbol')
    const stockDisplayPrice = document.getElementById('price')
    const stockDisplayPriceIcon = document.getElementById('price-icon')
    const stockDisplayTime = document.getElementById('time')

    stockDisplayName.textContent = stockData.name
    stockDisplaySymbol.textContent = stockData.sym
    stockDisplayPrice.textContent = stockData.price
    stockDisplayTime.textContent = stockData.time

    const currentPrice = Number(stockData.price);
    const {name,sym,price,time} = stockData
    const priceDirectionIcon = currentPrice > lastPrice ? 'up.png' : currentPrice < lastPrice ? 'down.png' : 'null.png'


    const pricdeIcon = document.createElement('img')
    pricdeIcon.src = `icons/${priceDirectionIcon}`
    pricdeIcon.alt = 'price Direction Icon'
    stockDisplayPriceIcon.innerHTML = ''
    stockDisplayPriceIcon.appendChild(pricdeIcon)

    

    // if (lastPrice !== null) {
    //     if (currentPrice > lastPrice) {
    //         stockDisplayPriceIcon.textContent = "▲";
    //         stockDisplayPriceIcon.style.color = "green";
    //     }
    //     else if (currentPrice < lastPrice) {
    //         stockDisplayPriceIcon.textContent = "▼";
    //         stockDisplayPriceIcon.style.color = "red";
    //     }
    //     else {
    //         stockDisplayPriceIcon.textContent = "►";
    //         stockDisplayPriceIcon.style.color = "#969696ff";
    //     }
    // }
    lastPrice = currentPrice;
}



setInterval(() => {
    renderStockTicker(getStockData())
}, 1500)
