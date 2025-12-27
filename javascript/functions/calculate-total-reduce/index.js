import {itemsBoughtArr} from './itemsBoughtArr.js'
console.log(itemsBoughtArr);

function calculateTotalCost(itemsBoughtArr, discount = 10){ 
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/
    const total = itemsBoughtArr.reduce( (total, price) =>  total + price.priceUSD,0)
    return `Total is ${total - discount}`
}

console.log(calculateTotalCost(itemsBoughtArr, 1)) 
