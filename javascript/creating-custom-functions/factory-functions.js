// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     }
// } 

function gamer (name,score){
    return{
        name,
        score,
        incrementScore() {
            this.score++
        }
    }
}
const sumesh = gamer('sumesh', 10)
console.log(sumesh); 
sumesh.incrementScore()
console.log(sumesh);

