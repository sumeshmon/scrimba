type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

// let people: Person[] = [person1, person2]
let people: Array<Person> = [person1, person2]
console.log(people);



// examples

// 1. Basic Array Typing
let numbers: number[] = [1,2,3]
// Same using generic syntax:
let numbers1: Array<number> = [1,2,3]

// 2. String array
let studentName:string[] = ['joe', 'bob']
let studentName1: Array<string> = ['joe', 'bob']

// 3. empty array
let myArr: string[] = []
let myArr1: Array<string> = []

// 4. Union Type Arrays
let mixed : (number | string | boolean)[] = [1,'bob', true]
let mixed1 : Array<string | boolean | number>= ['camel', false, 25]

type UserRole = "admin" | "member" | "guest"
let userRole : UserRole = "member"


// 5. Nested / Multidimensional Arrays
let matrix : number [] [] = [
    [1,2],
    [3,4]
]
let matrix1 : Array<string[]> = [
    ['camel','cow'],
    ['dog', 'cat']
]
//  Array<string[]> - Same as string[][]

// 6. Readonly Arrays
const roles : readonly string[] = ["admin", "user"]
//roles.push("guest") // error