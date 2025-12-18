import { studentsArr } from "./studentArr.js";

function calculateClassAverage(studentsArr){
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    },0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr));
