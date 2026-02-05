export default function FirstLetterCapitalArray(){
    
   const names = ["alice", "bob", "charlie", "danielle"]
    const squared  = names.map(param => {
        console.log(param.charAt(0).toUpperCase() + param.slice(1));
        
    })
    
}

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here