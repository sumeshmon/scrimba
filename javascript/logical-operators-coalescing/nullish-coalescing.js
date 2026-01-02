function fetchUserBalance() {
    
    // This is where we would make call to bank's database
    
    const userBalance = 0
    return userBalance
}

/*
Challenge:
    1. Figure what problem this code has and why it’s happening. 
       Don’t try to fix anything yet. 
*/

const balance = fetchUserBalance()


const displayBalance = balance ?? "currently not available"

console.log(`Your balance is ${displayBalance}.`)