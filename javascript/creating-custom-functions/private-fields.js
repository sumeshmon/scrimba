class Holiday{
   #destination
    constructor(destination, price){
        this.#destination = destination
        this.price = price
    }
}
const safari = new Holiday('India', 30000)
safari.#destination = 'US'
console.log(safari);
