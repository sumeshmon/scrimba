import {itemsBoughtArr} from './itemsBoughtArr.js'
function calculateTotalCost(itemsBoughtArr){ 
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/
    const total = itemsBoughtArr.reduce( (total, price) =>  total + price.priceUSD,0)
    return `Total is ${total}`
}

console.log(calculateTotalCost(itemsBoughtArr))
