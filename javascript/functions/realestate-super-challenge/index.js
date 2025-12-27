import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from './properties/placeholderPropertyObj.js';

function getPropertyHtml(properties = [placeholderPropertyObj]) {
    return properties.map((card) => {
        const { propertyLocation, priceGBP, roomsM2, comment, image } = card
        const sqmeter = roomsM2.reduce( (index, val) => {
            return index + val
        })
        return `<section class="card">
            <img src="./images/${image}">
            <div class="card-right">
                <h2>${propertyLocation}</h2>
                <h3>PRICE GBP ${priceGBP}</h3>
                <p>PRICE GBP ${comment}</p>
                <h3>TOTAL SIZE IN SQUARE METRES ${sqmeter}</h3>
            </div>
        </section>`

    }).join('')

}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)