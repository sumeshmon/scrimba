const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
const sweetMenu = [['Mixed Berry Ice Cream', 'Chocolate'], 'Chocolate Brownie', 'Orange Cheesecake']

// console.log([...lunchMenu])
// console.log([...lunchMenu, ...dinnerMenu, ...sweetMenu]);

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]
eventMenu[8][0] = 'Tutti Frutti'
// console.log('sweetMenu', sweetMenu)
// console.log('eventMenu', eventMenu)

const salad1 = {
    name: 'green',
    ingredients: ['lettuce', 'tomato'] 
}
const salad2 = {...salad1}
salad2.name = 'Greek'
salad2.ingredients[0] = 'Cucumber'
console.log(salad1)
console.log(salad2)

