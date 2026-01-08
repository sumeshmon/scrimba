const athlete1 = { name: "Alice", age: "50" }
const athlete2 = { name: "Dave", age: "51" }
const athlete3 = { name: "Nicky", age: "49" }

const finishers = new Map()
finishers.set(athlete1, 2000)
finishers.set(athlete2, 62000)
finishers.set(athlete3, 5000)

// finishers.forEach( (value, key)=>console.log(key.name, value))
// console.log(finishers.get(athlete3))

// challenge - remove athlete3

finishers.delete(athlete3)
console.log(finishers.has(athlete3))
console.log(finishers.has(athlete2))

const newItem = new Map()
athlete1.role = "Runner";
newItem.set(athlete1, 2000)
console.log(athlete1);
console.log(newItem.get(athlete1));



// here if the key is array of number, then order will be an issue
const person = {
    name: 'Micky',
    dob: '200174',
    location: 'Dunwich'
}
person.language = 'English'
person['2'] = 'Two'
person['1'] = 'One'
for (const key in person) {
    // console.log(person[key]);  
}
