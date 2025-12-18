const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const totalGrade = grades.reduce( function (total, marks){
   return total + marks
})
const average = totalGrade / grades.length
console.log(`The class average is ${totalGrade/grades.length}`)