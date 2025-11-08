/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/
const playerGuess = 4
const correctAnswer = 6

let message = 
    playerGuess < correctAnswer 
    ? 'Too low' 
    : playerGuess > correctAnswer 
    ? 'Too high'
    : 'exactly right'
console.log(message);
