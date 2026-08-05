// real run time error
let age:number = 25
// age = 'Twenty Five'
// console.log(age);


// Type Inference
let username = 'Sumesh'
let number = 20
let active = true

// Explicit annotation
let city: string = "London";


// any vs unknown vs never
let value1:any = 'Hello'
// console.log(value1.toUpperCase());
// console.log(value.toFixed(2));

let value2:unknown = 'Hello'
if (typeof value2 === 'string'){
    console.log('i am string');
} else {
    console.log('I am not string');
    
}
function getData(): unknown {
    return {
        name: "John"
    };
}
const user2 = getData()
// console.log(user2.name);

// Interface vs Type

// Interface
interface User{
    name: string;
    id: number
}
// extended from User
interface Hospital extends User {
    doctor: string
}
const student1: User = {
    name:'Sumesh',
    id: 100
}
// console.log(student1);
function printUser(studentName:User){
    // console.log(studentName.name);
    
}
printUser({
    name:'Sali Sumesh',
    id:200
})

const patent1:Hospital = {
    name:'Sumesh',
    id: 200,
    doctor: 'Rajeev'
}
// console.log(patent1);

// Type Alias
type Status = {
    id: number,
    name: string
}
const status1 :Status = ({
    id:300,
    name:'Sumesh'
}) 
console.log(status1);

// Union Types - Not possib;e with interface
type Status1 = 'Open' | 'Closed' | 'Pending'
let test: Status1;
console.log(test = 'Closed');

