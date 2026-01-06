class Employee {
    static employeeCount = 0
    constructor (name){
        this.name = name
        Employee.employeeCount++
    }
    static employeeCount1(){
       return  Employee.employeeCount++
    }

}

const employee1 = new Employee ('Sumesh')
const employee2 = new Employee ('Sali')
const employee3 = new Employee ('Theertha')
console.log(employee1);
console.log(employee2);
// console.log(Employee.employeeCount);
console.log(Employee.employeeCount1());


