const text = "Please switch off the WIFI before you leave."

// const regex = /wifi/gi
const userInput = 'wifi'
const regex = new RegExp(userInput,'gi')

const doesMatch = regex.test(text)

console.log(doesMatch);




