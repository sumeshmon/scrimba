const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

const conversionFactorMilesToKm = 1.6

function convertMilesToKms() {
    return  distanceWalkedMilesArr.map(function (distanceMiles) {
       return distanceMiles * conversionFactorMilesToKm
    })
   
} 
console.log(convertMilesToKms());
