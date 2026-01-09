function scorePoint(playerName) {
    let score = 0
    return {
       
        displayScore: function () {
            console.log(`${playerName} and the score is ${score}`);
        },
         incrementScore : function(){
            score ++
            
        },
        decrementScore : function(){
            score --
        }
    }
}

const player1 = scorePoint('Sumesh')
const player2 = scorePoint('Sali')

player1.displayScore()

player1.incrementScore()
player1.incrementScore()
player1.displayScore()


/*
Challenge:
   1. Add two more functions to this object. One to increment 
      the score and one to decrement the score. Call those functions 
      a couple of times for each player and then call displayScore 
      to check it’s working. 
*/