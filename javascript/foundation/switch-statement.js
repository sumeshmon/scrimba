/**
 * Price List
 * Coffee ₹2
 * Sandwiches ₹5
 * Salad ₹4
 * Lemon Cake ₹3
*/
// For example: "You selected Salad. That will be $4"
function selectItem (item){
    let price = 0
    switch (item) {
        case 'Coffee':
            price = 2
            break;
        
        case 'Sandwiches':
            price = 5
            break;

        case 'Salad':
            price = 4
            break;
        case 'Lemon Cake':
            price = 3
            break;
            
        default:
            return `Sorry we dont sell ${item}`
    }
    return `You seledcted ${item}. That will be ${price}`
}

console.log(selectItem('Sandwiches'));
