class Gamer {
    constructor(name,score){
         this.name = name
         this.score = score

    }
    incrementScore(){
        this.score++
    }
}

const sumesh = new Gamer('Sumesh', 10)
console.log(sumesh);
sumesh.incrementScore()
console.log(sumesh);
