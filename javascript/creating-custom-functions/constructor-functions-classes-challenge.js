/*
Challenge:
Rebuild this constructor function as a class.
*/
// function Character(name) {
//     this.name = name
//     this.collectedItemsArr = []
//     this.addItem = function (item) {
//         this.collectedItemsArr.push(item)
//         console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
//     }
// }

// const wizard = new Character('Merlin')
// wizard.addItem('a wand')

class Character{
    constructor(name){
        this.name = name
        this.collectedItemsArr = []
    }
    addItem(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }

}
const wizard = new Character('Merlin')
console.log(wizard);
wizard.addItem('a wand')
console.log(wizard);
