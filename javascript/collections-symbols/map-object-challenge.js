const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

// 1. Create a map object "athletes" to store the athletes.
const athletes = new Map()

// This function should add athletes to the "athletes" map. 
function addAthlete(athlete, time) {
    // .set key, value
    athletes.set(athlete, time)
    console.log(1, athlete);
    console.log(2, time);
}
/* This function should make the following appear in the console */
function getSummary() {
    for (const [athlete, time] of athletes) {
        // console.log(3, athlete);
        // console.log(4, time);
        
    console.log(
      `${athlete.name}'s average time is ${athlete.averageTime10KmMins} mins, ` +
      `but today ${athlete.name} achieved ${time} mins`
    );
  }
}

addAthlete(athlete1, 57.3)
// addAthlete(athlete2, 61.1)
// addAthlete(athlete3, 59.9)
// addAthlete(athlete4, 61.6)

console.log(getSummary(athlete1));