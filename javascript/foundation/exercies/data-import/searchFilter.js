function getMatchingTripsArr(arr, keyword){
    return arr.filter( function (trip){
        return trip.description.toLowerCase().includes(keyword)
    })

}

function travelTimeDays (arr){
    return arr.filter ( function (item){
     return item.travelTimeDays == 180;
    })
}

export {getMatchingTripsArr, travelTimeDays}