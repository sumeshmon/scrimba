function Event (name, location, date){
    this.name = name
    this.location = location
    this.date = date
    // this.getDetails = function (){
    //     return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    // }
}
// inheritance function
Event.prototype.getDetails = function(){
    return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
}

// only headliner is available with Concert constructor, rest all inheritance from Event
function Concert(name, location, date, headliner){
    Event.call(this, name, location, date)
    this.headliner = headliner
}
// const sumesh = new Concert( 'sumesh')
// console.log(sumesh);

// inheritance function
Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

// function
Concert.prototype.getDetails = function(){
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
const concert2 = new Concert("Concert Two", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Concert Three", "Highlands Park", "2024-08-08", "Dave Notes")
console.log(concert.getDetails())
console.log(concert2.getDetails())
console.log(concert3.getDetails())

