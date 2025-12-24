// const speedWaring = speed => `You are going at ${speed} mph!`

// console.log(speedWaring(40));


const speedWarning = (speed) => 
 speed > 40 ? `You are going at ${actualSpeed} mph!` : undefined;

// console.log(speedWarning(30, 40))


/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/
const distanceTraveledMiles = [267, 345, 234, 190, 299]
const distanceTraveledKm = distanceTraveledMiles.map(  (distance) => {
    return Math.round(distance * 1.6)
})

console.log(distanceTraveledKm);
