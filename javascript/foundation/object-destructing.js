/*
Challenge
1. Complete the object dreamHoliday with whatever
   information is true for you. Feel free to add 
   extra properties or change the existing ones. 
2. Destructure the object and use the individual 
   variables to log out one or more sentences about 
   your dream holiday. 
   
E.g. "I would love to go to Austin, Texas to visit the Tesla HQ. 
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/
const dreamHoliday = {
    country : 'Austin',
    city : 'Texas',
    destination : 'Tesla HQ',
    stay : 'luxury ranch',
    person : 'Elon Musk'
}
const {country, city, destination, stay, person} = dreamHoliday
console.log(`I would love to go to ${country}, ${city} to visit the ${destination}. I'd sleep in a ${stay} and hang out with ${person} all day.`)
