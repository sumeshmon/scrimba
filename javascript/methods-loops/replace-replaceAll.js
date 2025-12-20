const sentence = "i went to Australia and i saw a shark"

// will find and replace the first element only
// console.log(sentence.replace('i', 'I'));

// will replace all the elemets
console.log(sentence.replaceAll('i', 'I'));


/*
Challenge:
    1. Change the lowercase i’s to uppercase.
*/
// console.log(sentence.replaceAll(/\b(i)\b/g, 'I'))


const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring";
const result = paragraph.replaceAll(/(^\s*\w|[.!?]\s*\w)/g, function(match){
    return match.toUpperCase()
})
// console.log(result);

