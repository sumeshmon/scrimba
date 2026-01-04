function Gamer (name, score){
  this.name = name,
  this.score = score,
  this.incrementScore = function(){
    this.score++
  }
}

const sumesh = new Gamer('Sumesh', 0)

console.log(sumesh);
sumesh.incrementScore()
console.log(sumesh);
