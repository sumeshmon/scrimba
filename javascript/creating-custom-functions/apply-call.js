function displayPolitician(currentSituation){
    // console.log(this);
    console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`)
}

const politician1 = {
    name: 'Carly Fowler',
    age: 40
}

// console.log(displayPolitician.call(politician1,'In jail for corruption'));
console.log(displayPolitician.apply(politician1,['In jail for corruption']));
